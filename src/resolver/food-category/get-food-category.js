import { categoryModel } from "../../model/food-category-model.js";

export const getCategory = async (req, res) => {
  const dbCategory = await categoryModel.find();
  res.status(200).json(dbCategory);
};
