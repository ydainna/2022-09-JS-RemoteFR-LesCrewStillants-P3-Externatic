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
    .find(req.params.id)
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

    models.user
      .insert(user)
      .then(([rows]) => {
        if (rows.affectedRows === 1) {
          return res.status(201).json({ success: "User saved" });
        }
        return res.status(403).json({ error: "une erreur s'est produite" });
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

module.exports = {
  browse,
  read,
  add,
  log,
};
