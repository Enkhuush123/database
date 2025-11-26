import express from "express";
import { getFoodOrder } from "../resolver/food-order/get-foodOrder.js";
import { createFoodOrder } from "../resolver/food-order/create-foodOrder.js";
import { updateFoodOrder } from "../resolver/food-order/update-foodOrder.js";
import { deleteFoodOrder } from "../resolver/food-order/delete-foodOrder.js";
import { getFoodOrderById } from "../resolver/food-order/get-foodOrder-by-id.js";

export const foodOrder = express.Router();

foodOrder.get("/", getFoodOrder);
foodOrder.get("/:userId", getFoodOrderById);

foodOrder.post("/", createFoodOrder);

foodOrder.put("/:updateFoodId", updateFoodOrder);

foodOrder.delete("/", deleteFoodOrder);
