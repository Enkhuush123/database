import { foodOrderModel } from "../../model/food-order-model.js";

export const getFoodOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await foodOrderModel
      .find({ user: userId })
      .populate("user")
      .populate("foodOrderItems.food");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
