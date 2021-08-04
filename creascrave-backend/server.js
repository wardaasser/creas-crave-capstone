const express = require("express");
const server = require("express")();
const cors = require("cors");
server.use(require("cors")());
const bodyParser = require("body-parser");
server.use(require("body-parser").json());

const {
  db,
  Cart,
  Creatives,
  CreativesInCart,
  Customers,
  Favorites,
  Users,
} = require("./models/db.js");
const Op = require("sequelize").Op;

// const db = new Client({ user: "latoniamertica", database: "creascrave" });
// db.connect();
// db.query("SELECT NOW()", (error, res) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(res);
//   }
// });

const isLoggedInMiddleware = async (req, res, next) => {
  if (!req.headers.email || !req.headers.password) {
    res.send({ error: "Authentication Required as Specified in Criteria" });
  } else {
    const customersDB = await Customers.findOne({
      where: { emailAddress: req.headers.emailAddress },
    });
  }
  if (!customersDB) {
    res.send({
      error: "No Known Customer Account Exists at That Email Address",
    });
  } else {
    if (customersDB.password === req.headers.password) {
      res.locals.customers = customersDB;
      next();
    } else {
      res.send({ error: "Password Not a Match to Customer Account" });
    }
  }
};

server.get(`/`, (req, res) => {
  res.send({ hello: "Code World - Creas Crave API is Running!" });
});

server.get("/customers/:pageNum", isLoggedInMiddleware, async (req, res) => {
  const page = parseInt(req.params.pageNum);
  if (page <= 0) {
    res.send({ customers: await Customers.findAndCountAll({ limit: 5 }) });
  } else {
    res.send({
      customers: await Customers.findAndCountAll({
        limit: 5,
        offset: 5 * (page - 1),
      }),
    });
  }
});

server.post("./customers", isLoggedInMiddleware, async (req, res) => {
  if (req.body.zipCode.length !== 5) {
    res.send({ error: "Zip Code Too Short" });
  } else {
    await Customers.create(req.body);
    res.send({ customers: await Customers.findAll() });
  }
});

server.post(`/customersSearch`, async (req, res) => {
  res.send({
    customers: await Customers.findAll({
      where: {
        [Op.or]: {
          nameFirst: { [Op.iLike]: `%${req.body.searchQuery}%` },
          nameLast: { [Op.iLike]: `%${req.body.searchQuery}%` },
        },
      },
    }),
  });
});

// const getCustomers = async () => {
//   const customers = await db.query(`SELECT * FROM customers`);
//   return customers.rows;
// };

// server.get(`/creascrave/customers`, async (req, res) => {
//   res.send({ customers: await getCustomers() });
// });

// server.post(`/creascrave/customers`, async (req, res) => {
//   await db.query(`INSERT INTO customers
//   ("namefirst", "namelast", "addressphysicalnumberandstreet", "addressphysicalcity","addressphysicalstate", "addressphysicalzipcode", "phonenumber", "addressshippingnumberandstreet", "addressshippingcity", "addressshippingstate", "addressshippingzipcode", timestamp) VALUES (
//       '${req.body.namefirst}',
//       '${req.body.namelast}',
//       '${req.body.addressphysicalnumberandstreet}',
//       '${req.body.addressphysicalcity}',
//       '${req.body.addressphysicalstate}',
//       '${req.body.addressphysicalzipcode}',
//       '${req.body.phonenumber}',
//       '${req.body.addressshippingnumberandstreet}',
//       '${req.body.addressshippingcity}',
//       '${req.body.addressshippingzipcode}',
//       '${req.body.emailAddress}',
//       NOW()
//       )`);

//   const customers = await db.query(`SELECT * FROM creascrave.customers`);
//   res.send({ customers: await getCustomers() });
// });

// server.put(`/creascrave/customers`, async (req, res) => {
//   await db.query(
//     `UPDATE creascrave.customers SET namefirst=${req.body.namefirst} WHERE id=${req.body.id}`
//   );
//   res.send({ customers: await getCustomers() });
// });

// server.delete(`/creascrave/customers`, async (req, res) => {
//   await db.query(`DELETE FROM customers WHERE id=${req.body.id}`);
//   res.send({ customers: await getCustomers() });
// });

server.post(`/login`, async (req, res) => {
  const customersDB = await Customers.findOne({
    where: { emailAddress: req.headers.emailAddress },
  });
  console.log(customersDB);

  if (!customersDB) {
    res.send({
      error: "No Customer Account Known to Exist at That Email Address",
    });
  } else {
    if (customersDB.password === req.headers.password) {
      res.send({ success: true });
    } else {
      res.send({ error: "Password Does Not Match Customer Account" });
    }
  }
});

server.listen(4400, () => {
  console.log("Server Listening on Port 4400");
});
