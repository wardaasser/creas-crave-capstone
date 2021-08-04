const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("users", {
    userID: {
      type: DT.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameFirst: DT.TEXT,
    nameLast: DT.TEXT,
    jobTitle: DT.TEXT,
    username: DT.VARCHAR,
    password: DT.VARCHAR,
  });
};
