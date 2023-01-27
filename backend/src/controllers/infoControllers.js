const models = require("../models");

const browse = (req, res) => {
  models.information
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
  models.information
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

const edit = (req, res) => {
  const information = req.body;
  information.id = parseInt(req.params.id, 10);
  const info = {
    ...information,
    start_date: information.start_date.split("T")[0],
  };
  // TODO validations (length, format...)

  models.information
    .update(info)
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

const editCV = (req, res) => {
  const cv = req.body;

  // TODO validations (length, format...)

  cv.id = parseInt(req.params.id, 10);
  models.information
    .updateCV(cv)
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

module.exports = {
  browse,
  read,
  edit,
  editCV,
};
