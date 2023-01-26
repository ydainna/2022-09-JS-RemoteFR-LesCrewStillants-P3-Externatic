// const models = require("../models");

const destroyMultiple = (req, res) => {
  const { arr } = req.body;
  console.warn(arr);
  console.warn(res);
  // console.warn(req.body);
  //   models.item
  //     .delete(req.params.id)
  //     .then(([result]) => {
  //       if (result.affectedRows === 0) {
  //         res.sendStatus(404);
  //       } else {
  //         res.sendStatus(204);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
};

module.exports = {
  destroyMultiple,
};
