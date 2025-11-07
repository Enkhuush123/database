import express from "express";
import { getFoods } from "../resolver/foods/get-food.js";
import { createFood } from "../resolver/foods/create-food.js";
import { updateFood } from "../resolver/foods/update-food.js";
import { deleteFood } from "../resolver/foods/delete-food.js";

import { getFoodByCategory } from "../resolver/foods/get-foodbycategoryId.js";

export const foods = express.Router();

foods.get("/", getFoods);
foods.get("/:categoryId", getFoodByCategory);

foods.post("/", createFood);

foods.put("/:foodId", updateFood);

foods.delete("/:foodId", deleteFood);
