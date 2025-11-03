import { foodOrderModel } from "../../model/food-order-model.js";

export const deleteFoodOrder = async (req, res) => {
  const { foodId } = req.params;
  const { id } = req.body;
  await foodOrderModel.findByIdAndDelete(foodId, id);
  res.send("food order deleted");
};
