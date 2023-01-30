const models = require("../models");

const add = (req, res) => {
  const uoffer = req.body;

  // TODO validations (length, format...)

  models.user_offer
    .favorite(uoffer)
    .then(() => {
      res.location(`/uoffer`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyWhatever = (req, res) => {
  const { id, offer } = req.params;
  models.user_offer
    .delete(id, offer)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Couldn't unliked this offer !" });
      } else {
        res.status(204).json({ success: "This offer was successfuly unliked" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  destroyWhatever,
};
