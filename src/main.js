"use client";
import express from "express";
import { router } from "./router/users.js";
import mongoose from "mongoose";
import { foods } from "./router/foods.js";
import { category } from "./router/category.js";
import { foodOrder } from "./router/foodOrder.js";

const app = express();
const PORT = 9000;

app.use(express.json());

app.use("/users", router);
app.use("/foods", foods);
app.use("/category", category);
app.use("/foodOrder", foodOrder);
mongoose
  .connect(`mongodb+srv://enhuush:80651328@food.zcfig9y.mongodb.net/`)
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/users
    `);
});
