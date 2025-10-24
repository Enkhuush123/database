import { userModel } from "../../model/user-model.js";

export const getUsersbyId = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    res.send("food not found");
  }
  res.status(200).json(user);
};
