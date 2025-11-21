import { userModel } from "../../model/user-model.js";

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    res.status(200).json({ exists: !!user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
