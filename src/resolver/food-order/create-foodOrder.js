import { foodModel } from "../../model/food-model.js";
import { foodOrderModel } from "../../model/food-order-model.js";

export const createFoodOrder = async (req, res) => {
  const foodOrder = req.body;
  await foodOrderModel.create(foodOrder);
  res.send("Food ordered");
};
