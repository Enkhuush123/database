import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  try {
    const data = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      data.id,
      {
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        address: data.address,
        role: data.role,
        orderedFoods: data.orderedFoods,
      },
      { new: true }
    );

    res.status(200).json({
      message: "User updated",
      user: updatedUser,
      address: updatedUser.address,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Update error", error: err });
  }
};
