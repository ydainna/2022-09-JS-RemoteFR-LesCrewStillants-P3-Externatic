const { verify, hash, argon2id } = require("argon2");
const { generateToken } = require("../services/jwt");
const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .findById(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { password } = req.body;

  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(password, hashingOptions).then((hashedPassword) => {
    const user = { ...req.body, hashedPassword };

    // TODO validations (length, format...)

    // make information to get a res which will be used as information.id
    models.information
      .insert()
      .then(([information]) => {
        // make address to get a res which will be used as address.id
        models.address
          .insert()
          // make user using information id and address id
          .then(([address]) => {
            models.user
              .insert(user, information.insertId, address.insertId)
              .then(([rows]) => {
                if (rows.affectedRows === 1) {
                  return res.status(201).json({ success: "User saved" });
                }
                return res
                  .status(403)
                  .json({ error: "une erreur s'est produite" });
              })
              .catch((err) => {
                console.error(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};

const log = (req, res) => {
  const { email, password } = req.body;

  models.user
    .findByEmail(email)
    .then(([[user]]) => {
      if (!user) {
        return res.status(403).json({ error: "User not found" });
      }
      verify(user.password, password)
        .then((match) => {
          if (match) {
            const token = generateToken({
              id: user.id,
              email: user.email,
            });
            return res
              .cookie("user_auth", token, { httpOnly: true, secure: false })
              .status(200)
              .json({ token, sucess: "User logged" });
          }
          return res.status(403).json({ error: "password incorrect" });
        })
        .catch((error) => {
          console.error(error);
        });
      return false;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const { filesToUpload, info } = req.body;

  info.id = parseInt(req.params.id, 10);

  const user = {
    ...info,
    avatar: filesToUpload,
  };

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editPassword = (req, res) => {
  const { password } = req.body;

  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(password, hashingOptions).then((hashedPassword) => {
    const user = { ...req.body, hashedPassword };

    user.id = parseInt(req.params.id, 10);

    models.user
      .updatePassword(user)
      .then(([rows]) => {
        if (rows.affectedRows === 1) {
          return res.status(201).json({ success: "User password updated" });
        }
        return res.status(403).json({ error: "une erreur s'est produite" });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};

const destroy = (req, res) => {
  models.user_offer
    .deleteMultipleUserOffer(req.params.id)
    .then(() => {
      models.offer.deleteMultipleOffer(req.params.id);
    })
    .then(() => {
      models.company.deleteMulipleCompany(req.params.id);
    })
    .then(() => {
      models.user.delete(req.params.id).then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: "Couldn't delete user!" });
        } else {
          res.status(204).json({ success: "User was successfuly deleted" });
        }
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  log,
  edit,
  editPassword,
  destroy,
};
