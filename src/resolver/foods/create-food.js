import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const createFood = async (req, res) => {
  console.log(req.body, "hehehee");

  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const token = authHeader.split(" ")[1];
    const verified = jwt.verify(token, "secret-key");
    if (!verified) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    if (verified.role !== "ADMIN") {
      return res.status(403).json({ message: "only admin can add food" });
    }
    const newFoods = req.body;
    const createdFood = await foodModel.create(newFoods);
    res.json({ message: "created food successfully", food: createdFood });
  } catch (err) {
    console.log(err, "haha");

    res.status(500).json({ message: "error encountered", err });
  }
};
