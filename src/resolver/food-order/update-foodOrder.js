import { foodOrderModel } from "../../model/food-order-model.js";

export const updateFoodOrder = async (req, res) => {
  const updateFoodOrder = req.body;
  const { id } = req.params;
  await foodOrderModel.findByIdAndUpdate(id, {
    user: updateFoodOrder.user,
    totalPrice: updateFoodOrder.totalPrice,
    foodOrderItems: updateFoodOrder.foodOrderItems,
    status: updateFoodOrder.status,
  });
  res.send("foodOrder updated");
};
