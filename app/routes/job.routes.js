module.exports = app => {
    const job = require("../controllers/job.controller.js");
    var router = require("express").Router();

    // Retrieve all Jobs
    router.get("/", job.findAll);
    // Retrieve a single Job by Id
    router.get("/:id", job.findOne);
    
    app.use('/api/jobs', router);
  };