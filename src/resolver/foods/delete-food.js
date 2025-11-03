import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";
export const deleteFood = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const token = authHeader.split(" ")[1];
    const verified = jwt.verify(token, "secret-key");
    if (!verified) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    if (verified.role !== "ADMIN") {
      return res.status(403).json({ message: "Only admin can delete food" });
    }

    const { foodId } = req.params;
    await foodModel.findByIdAndDelete(foodId);
    res.send("deleted");
  } catch (err) {
    res.status(500).json({ message: "error encountered", err: err.message });
  }
};
