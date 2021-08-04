const Sequelize = require("sequelize");

const db = new Sequelize("postgres://creascrave@localhost:5432/creascrave", {
  logging: false,
});

const Cart = require("./Cart")(db);
const Creatives = require("./Creatives")(db);
const CreativesInCart = require("./CreativesInCart")(db);
const Customers = require("./Customers")(db);
const Favorites = require("./Favorites")(db);
const Users = require("./Users")(db);

const connectToDB = async () => {
  await db.authenticate();
  console.log(`Database Connected Successfully`);

  db.sync();
};

connectToDB();
module.exports = {
  db,
  Cart,
  Creatives,
  CreativesInCart,
  Customers,
  Favorites,
  Users,
};
