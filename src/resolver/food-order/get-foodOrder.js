import { foodOrderModel } from "../../model/food-order-model.js";

export const getFoodOrder = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const orders = await foodOrderModel
    .find()
    .populate("user")
    .populate("foodOrderItems.food");

  res.status(200).json(orders);
};
