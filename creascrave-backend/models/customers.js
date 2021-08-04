const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("customers", {
    customerID: {
      type: DT.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameFirst: DT.TEXT,
    nameLast: DT.TEXT,
    addressPhysicalNumberAndStreet: DT.TEXT,
    addressPhysicalCity: DT.TEXT,
    addressPhysicalState: DT.VARCHAR(2),
    addressPhysicalZipCode: DT.VARCHAR(5),
    phoneNumber: DT.VARCHAR,
    addressShippingNumberAndStreet: DT.TEXT,
    addressShippingCity: DT.TEXT,
    addressShippingState: DT.VARCHAR(2),
    addressShippingZipCode: DT.VARCHAR(5),
    emailAddress: DT.VARCHAR,
  });
};
