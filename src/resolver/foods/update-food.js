import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const updateFood = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader, "header");

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const token = authHeader.split(" ")[1];
    const verified = jwt.verify(token, "secret-key");

    console.log(verified, "verified");

    if (!verified) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    if (verified.role !== "ADMIN") {
      return res.status(403).json({ message: "Only admin can delete food" });
    }

    const { foodId } = req.params;
    console.log(foodId, "foodId");

    const updateFood = req.body;
    console.log(updateFood, "updateFood");

    const updated = await foodModel.findByIdAndUpdate(
      foodId,
      {
        foodName: updateFood.foodName,
        price: updateFood.price,
        image: updateFood.image,
        ingredients: updateFood.ingredients,
        category: updateFood.category,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).send("Foood not found");
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "error encountered", err: err.message });
  }
};
