import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  const { foodId } = req.params;
  console.log(foodId, "foodId");

  const updateFood = req.body;
  console.log(updateFood, "updateFood");

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
  res.status(200).json(updated);
};
