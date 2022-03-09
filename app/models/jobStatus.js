module.exports = (sequelize, Sequelize) => {
    const JobStatus = sequelize.define("JobStatus", {   
        jobStatusName: {type: Sequelize.STRING}  
    });


  
    JobStatus.associate = models => {
        JobStatus.hasMany(models.Job, {});

    };

    return JobStatus;
  };
  