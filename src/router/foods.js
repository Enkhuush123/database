import express from "express";
import { getFoods } from "../resolver/foods/get-food.js";
import { createFood } from "../resolver/foods/create-food.js";
import { updateFood } from "../resolver/foods/update-food.js";
import { deleteFood } from "../resolver/foods/delete-food.js";
import { getFoodbyId } from "../resolver/foods/get-food-by-id.js";

export const foods = express.Router();

foods.get("/", getFoods);
foods.get("/:id", getFoodbyId);

foods.post("/", createFood);

foods.put("/", updateFood);

foods.delete("/", deleteFood);
