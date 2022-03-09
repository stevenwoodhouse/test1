module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("Job", {     
    });


  
    Job.associate = models => {
        Job.belongsTo(models.Line, {
        foreignKey: {
          allowNull: false
        }
      }),


      Job.belongsTo(models.JobStatus, {
        foreignKey: {
          allowNull: false
        }
      });
   

    };

    return Job;
  };
  