import { foodModel } from "../../model/food-model.js";

export const getFoodByCategory = async (req, res) => {
  const { categoryId } = req.params;
  if (!categoryId) {
    res.status(404).json({ message: "error" });
  }
  const foods = await foodModel
    .find({ category: categoryId })
    .populate("category");

  res.status(200).json(foods);
};
