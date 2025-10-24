import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  const updateFood = req.body;
  const { id } = req.params;
  await foodModel.findByIdAndUpdate(id, {
    foodName: updateFood.foodName,
    price: updateFood.price,
    image: updateFood.image,
    ingredients: updateFood.image,
    category: updateFood.category,
  });
  res.send("User updated");
};
