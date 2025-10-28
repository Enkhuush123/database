import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  const { foodId } = req.params;
  const updateFood = req.body;

  const updated = await foodModel.findByIdAndUpdate(
    foodId,
    {
      foodName: updateFood.foodName,
      price: updateFood.price,
      image: updateFood.image,
      ingredients: updateFood.ingredients,
      category: updateFood.category,
    },
    { new: true }
  );

  if (!updated) {
    return res.status(404).send("Foood not found");
  }
  res.send("User updated");
};
