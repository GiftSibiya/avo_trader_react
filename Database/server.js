const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    hello: "yes, the server is working",
  });
});

const connectToDb = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Connected to local Database");
  } catch (err) {
    console.log(`can't connect to DB my G ${err}`);
  }
};
connectToDb();

const orderSchema = new mongoose.Schema({
  customer: String,
  bags: Number,
  amount: Number,
  batch: String,
});

const orderModel = mongoose.model("orders", orderSchema);

app.post("/create", async (req, res) => {
  const customer = req.body.customer;
  const bags = req.body.bags;
  const amount = req.body.amount;
  const batch = req.body.batch;
  try {
    const newOrder = await orderModel.create({
      customer: customer,
      bags: bags,
      amount: amount,
      batch: batch,
    });
    res.json(newOrder);

    console.log(newOrder);
  } catch (err) {
    console.log(`error creating the order ${err}`);
  }
});

app.get("/orders", async (req, res) => {
  const allOrders = await orderModel.find();
  res.json(allOrders);
});
/// The listen is way over here
app.listen(process.env.PORT, () => {
  console.log(`app is listening to port: ${process.env.PORT}`);
});
