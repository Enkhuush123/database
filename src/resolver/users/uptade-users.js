import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  const updateUser = req.body;
  const { id } = req.params;
  console.log(req.body);

  await userModel.findByIdAndUpdate(
    id,
    {
      email: updateUser.email,
      password: updateUser.password,
      phoneNumber: updateUser.phoneNumber,
      address: updateUser.address,
      role: updateUser.role,
      orderedFoods: updateUser.orderedFoods,
    },
    { new: true }
  );

  res.send("User uptaded");
};
