import express from "express";
import { createCategory } from "../resolver/food-category/create-category.js";
import { getCategory } from "../resolver/food-category/get-food-category.js";
import { updateCategory } from "../resolver/food-category/update-category.js";
import { deleteCategory } from "../resolver/food-category/delete-category.js";

export const category = express.Router();

category.get("/", getCategory);

category.post("/", createCategory);

category.put("/:categoryId", updateCategory);

category.delete("/:catergoryId", deleteCategory);
