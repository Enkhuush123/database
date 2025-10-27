import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const newUsers = req.body;
  const password = newUsers.password;

  const hashedPassowrd = await bcrypt.hash(password, 10);
  await userModel.create({
    email: newUsers.email,
    password: hashedPassowrd,
    phoneNumber: newUsers.password,
    address: newUsers.address,
    role: newUsers.role,
    orderedFoods: newUsers.orderedFoods,
  });
  res.send("new user added");
};
