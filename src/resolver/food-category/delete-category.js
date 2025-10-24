import { categoryModel } from "../../model/food-category-model.js";

export const deleteCategory = async (req, res) => {
  const { id } = req.body;
  await categoryModel.findByIdAndDelete(id);
  res.send("category deleted!");
};
