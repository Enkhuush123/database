import { foodModel } from "../../model/food-model.js";

export const getFoodbyId = async (req, res) => {
  const { id } = req.params;
  const food = await foodModel.findById(id);
  if (!food) {
    res.send("food not found");
  }
  res.status(200).json(food);
};
