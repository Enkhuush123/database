import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { userModel } from "../../model/user-model.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json({ message: "user not found" });

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch)
    return res.status(400).json({ message: "password doesn't exist" });
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "secret-key",

    {
      expiresIn: "10m",
    }
  );
  res.status(200).json({
    message: "Login Successful",
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
};
