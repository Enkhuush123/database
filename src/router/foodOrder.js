import express from "express";
import { getFoodOrder } from "../resolver/food-order/get-foodOrder.js";
import { createFoodOrder } from "../resolver/food-order/create-foodOrder.js";
import { updateFoodOrder } from "../resolver/food-order/update-foodOrder.js";
import { deleteFoodOrder } from "../resolver/food-order/delete-foodOrder.js";

export const foodOrder = express.Router();

foodOrder.get("/", getFoodOrder);

foodOrder.post("/", createFoodOrder);

foodOrder.put("/", updateFoodOrder);

foodOrder.delete("/", deleteFoodOrder);
