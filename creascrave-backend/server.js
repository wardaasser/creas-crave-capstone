const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { Client } = require("pg");
const db = new Client({ user: "latoniamertica", database: "creascrave" });
db.connect();
db.query("SELECT NOW()", (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log(res);
  }
});

server.get(`/`, (req, res) => {
  res.send("Hello Code World the Creas Crave API is Running!");
});

const getCustomers = async () => {
  const customers = await db.query(`SELECT * FROM customers`);
  return customers.rows;
};

server.get(`/creascrave`, async (req, res) => {
  res.send({});
});

server.post(`/creascrave/customers`, async (req, res) => {
  await db.query(`INSERT INTO customers 
    (namefirst, namelast, addressphysicalnumberandstreet, addressphysicalcity,addressphysicalstate, addressphysicalzipcode, phonenumber, addressshippingnumberandstreet, addressshippingcity, addressshippingstate, addressshippingzipcode, timestamp) VALUES (
        ${req.body.namefirst},
        ${req.body.namelast},
        ${req.body.addressphysicalnumberandstreet},
        ${req.body.addressphysicalcity},
        ${req.body.addressphysicalstate},
        ${req.body.addressphysicalzipcode},
        ${req.body.phonenumber},
        ${req.body.addressshippingnumberandstreet},
        ${req.body.addressshippingcity},
        ${req.body.addressshippingzipcode},
        NOW() 
        )`);

  const customers = await db.query(`SELECT * FROM creascrave.customers`);
  res.send({ customers: customers.rows });
});

server.put(`/creascrave/customers`, async (req, res) => {
  await db.query(
    `UPDATE customers SET namefirst=${req.body.namefirst} WHERE id=${req.body.id}`
  );
  res.send({ customers: await getCustomers() });
});

server.delete(`/creascrave/customers`, async (req, res) => {
  await db.query(`DELETE FROM customers WHERE id=${req.body.id}`);
  res.send({ customers: await getCustomers() });
});

server.listen(4400, () => {
  console.log("Server Listening on Port 4400");
});
