import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: ObjectId,
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: Schema.ObjectId,
    required: true,
    ref: "category",
  },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const foodModel = mongoose.model("food", FoodSchema);
