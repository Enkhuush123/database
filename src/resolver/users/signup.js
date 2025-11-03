import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../model/user-model.js";

export const signup = async (req, res) => {
  const { email, password, phoneNumber, address, role } = req.body;

  const checkemail = await userModel.findOne({ email });
  if (checkemail) {
    res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = userModel.create({
    email,
    password: hashedPassword,
    phoneNumber,
    address,
    role,
  });

  res.status(200).json({
    message: "new user registered",
    user: {
      id: newUser._id,
      email: newUser.email,
      role: newUser.role,
    },
  });
};
