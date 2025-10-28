import { categoryModel } from "../../model/food-category-model.js";

export const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const updateFoodCategory = req.body;

  await categoryModel.findByIdAndUpdate(categoryId, {
    categoryName: updateFoodCategory.categoryName,
  });
  res.send("category updated!");
};
