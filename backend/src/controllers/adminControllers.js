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
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  destroyMultiple,
};
