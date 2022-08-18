const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecomdb"
  }
);

app.get("/api/featured", (req, res) =>
{
  const selectFeat = "SELECT * FROM tbl_featured";
  db.query(selectFeat, (err, result) =>
  {
    res.send(result);
  });
});

app.get("/api/price", (req, res) =>
{
  const selectPrice = "SELECT * FROM tbl_featured WHERE feat_price=9.99";
  db.query(selectPrice, (err, result1) =>
  {
    res.send(result1)
  });
});

app.listen(3001, () =>
{
  console.log("Running on port: 3001");
})