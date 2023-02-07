const models = require("../models");

const destroyMultiple = (req, res) => {
  const { arr } = req.body;

  models.user_offer
    .deleteMultipleUserOffer(arr)
    .then(() => {
      models.offer.deleteMultipleOffer(arr);
    })
    .then(() => {
      models.company.deleteMulipleCompany(arr);
    })
    .then(() => {
      models.user.deleteMulipleUser(arr);
      res.status(200).json({ message: "users deleted" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateRole = (req, res) => {
  const { data } = req.body;

  models.user
    .updateRole(data)
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
};

module.exports = {
  destroyMultiple,
  updateRole,
};
