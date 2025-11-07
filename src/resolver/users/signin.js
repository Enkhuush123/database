import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { userModel } from "../../model/user-model.js";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "email or password invalid" });
    console.log(user);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ message: "email or password invalid" });
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "secret-key"
    );
    console.log(token);

    return res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log("cant login");
  }
};
