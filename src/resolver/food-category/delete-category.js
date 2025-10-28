import { categoryModel } from "../../model/food-category-model.js";

export const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  await categoryModel.findByIdAndDelete(categoryId);
  res.send("category deleted!");
};
