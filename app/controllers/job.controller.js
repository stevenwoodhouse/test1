const db = require("../models");
const Job = db.Job;
const Line = db.Line;
const JobStatus = db.JobStatus;

// find all jobs
exports.findAll = (req, res) => {
  Job.findAll({include: ["Line","JobStatus"]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    });
};


// Find a single job by Id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Job.findByPk(id, {include: ["Line","JobStatus"]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find job with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Job with id=" + id
      });
    });
};