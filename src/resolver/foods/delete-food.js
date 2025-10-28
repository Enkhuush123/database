import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const { foodId } = req.params;
  await foodModel.findByIdAndDelete(foodId);
  res.send("deleted");
};
