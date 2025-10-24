import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const newUsers = req.body;
  // users.push(newUsers);
  await userModel.create(newUsers);
  res.send("new user added");
};
