import { foodOrderModel } from "../../model/food-order-model.js";

export const createFoodOrder = async (req, res) => {
  try {
    const { foodOrderItems, totalPrice, user, address } = req.body;

    if (!user || !foodOrderItems || foodOrderItems.length === 0) {
      return res.status(400).send("Missing required fields");
    }

    const newOrder = await foodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems,
      address,
    });

    const populatedOrder = await foodOrderModel
      .findById(newOrder._id)
      .populate("foodOrderItems.food");

    res.status(201).json(populatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while creating order");
  }
};
