import { categoryModel } from "../../model/food-category-model.js";
import { foodModel } from "../../model/food-model.js";

export const getCategory = async (req, res) => {
  const dbCategory = await categoryModel.find();
  const categories = await Promise.all(
    dbCategory.map(async (cur) => {
      const foods = await foodModel.find({ category: cur._id });
      return {
        _id: cur._id,
        categoryName: cur.categoryName,
        food: foods.length,
      };
    })
  );
  res.status(200).json(categories);
};
