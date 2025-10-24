import { foodOrderModel } from "../../model/food-order-model.js";

export const deleteFoodOrder = async (req, res) => {
  const { id } = req.body;
  await foodOrderModel.findByIdAndDelete(id);
  res.send("food order deleted");
};
