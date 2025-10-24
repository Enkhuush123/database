import { categoryModel } from "../../model/food-category-model.js";

export const updateCategory = async (req, res) => {
  const updateFoodCategory = req.body;
  const { id } = req.params;
  await categoryModel.findByIdAndUpdate(id, {
    categoryName: updateFoodCategory.categoryName,
  });
  res.send("category updated!");
};
