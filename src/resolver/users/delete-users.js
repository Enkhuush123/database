import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  await userModel.findByIdAndDelete(id);
  res.send("deleted");
};
