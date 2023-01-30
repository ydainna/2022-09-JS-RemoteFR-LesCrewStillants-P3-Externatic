const models = require("../models");

const browser = (req, res) => {
  models.user_offer
    .findAllByUserId(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browser,
};
