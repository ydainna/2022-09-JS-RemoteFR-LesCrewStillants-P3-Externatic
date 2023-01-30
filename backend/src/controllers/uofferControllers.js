const models = require("../models");

const browser = (req, res) => {
  const user = req.body;

  models.user_offer
    .findAllByUserId(user.user_id)
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
