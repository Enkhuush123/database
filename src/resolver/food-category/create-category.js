import { categoryModel } from "../../model/food-category-model.js";

export const createCategory = async (req, res) => {
  const newCategory = req.body;
  await categoryModel.create(newCategory);
  res.send("category created!");
};
