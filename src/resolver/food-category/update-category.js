import { categoryModel } from "../../model/food-category-model.js";

export const updateCategory = async (req, res) => {
  const updateFoodCategory = req.body;

  await categoryModel.findByIdAndUpdate(updateFoodCategory.id, {
    categoryName: updateFoodCategory.categoryName,
  });
  res.send("category updated!");
};
