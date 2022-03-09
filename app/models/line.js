module.exports = (sequelize, Sequelize) => {
    const Line = sequelize.define("Line", {
      lineName: {type: Sequelize.STRING}
     
    });


  
 /*    Line.associate = models => {
        Line.belongsTo(models.LineType, {
        foreignKey: {
          allowNull: false
        }
      });

        Line.associate = models => {
            Line.hasMany(models.Job, {});
        };
    }; */

    return Line;
  };
  