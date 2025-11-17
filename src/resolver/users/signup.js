import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../model/user-model.js";

export const signup = async (req, res) => {
  try {
    const { email, password, phoneNumber, address, role } = req.body;

    const checkemail = await userModel.findOne({ email });
    if (checkemail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET || "secretKey",
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      message: "New user registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (err) {
    console.log("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
