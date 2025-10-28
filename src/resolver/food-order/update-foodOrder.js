import { foodOrderModel } from "../../model/food-order-model.js";

export const updateFoodOrder = async (req, res) => {
  const { updateFoodId } = req.params;
  const updateFoodOrder = req.body;

  await foodOrderModel.findByIdAndUpdate(updateFoodId, {
    user: updateFoodOrder.user,
    totalPrice: updateFoodOrder.totalPrice,
    foodOrderItems: updateFoodOrder.foodOrderItems,
    status: updateFoodOrder.status,
  });
  res.send("foodOrder updated");
};
