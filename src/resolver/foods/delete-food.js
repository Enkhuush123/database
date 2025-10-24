import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const { id } = req.body;
  await foodModel.findByIdAndDelete(id);
  res.send("deleted");
};
