import { foodModel } from "../../model/food-model.js";
import { userModel } from "../../model/user-model.js";

export const createFood = async (req, res) => {
  const newFoods = req.body;
  await foodModel.create(newFoods);
  res.send("new food added");
};
