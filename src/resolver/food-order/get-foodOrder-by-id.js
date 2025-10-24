import { foodModel } from "../../model/food-model.js";
import { foodOrderModel } from "../../model/food-order-model.js";

export const getFoodOrderbyId = async (req, res) => {
  const { id } = req.params;
  const OrderFood = await foodOrderModel.findById(id);
  if (!OrderFood) {
    res.send("food not found");
  }
  res.status(200).json(OrderFood);
};
