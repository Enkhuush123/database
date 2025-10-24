import { userModel } from "../../model/user-model.js";

export const getUsers = async (req, res) => {
  const dbUsers = await userModel.find().populate({
    path: "orderedFoods",
    populate: {
      path: "foodOrderItems.food",
    },
  });
  res.status(200).json(dbUsers);
};
