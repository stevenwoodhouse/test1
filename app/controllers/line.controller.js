const db = require("../models");
const Line = db.Line;

// find all lines
exports.findAll = (req, res) => {
  Line.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lines."
      });
    });
  };

// Find a single line by Id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Line.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find line with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving line with id=" + id
      });
    });
};