const db = require("../models");
const JobStatus = db.JobStatus;

// find all jobStatuses
exports.findAll = (req, res) => {
  JobStatus.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving job statuses."
      });
    });
  };

// Find a single jobStatus by Id
exports.findOne = (req, res) => {
  const id = req.params.id;
  JobStatus.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find jobStatus with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving jobStatus with id=" + id
      });
    });
  };