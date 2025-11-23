import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodOrderSchema = new Schema({
  id: ObjectId,
  user: {
    type: Schema.ObjectId,
    required: true,
    ref: "user",
  },
  totalPrice: Number,
  foodOrderItems: [
    {
      food: { type: Schema.ObjectId, require: true, ref: "food" },
      quantity: { type: Number, require: true },
    },
  ],

  address: { type: String, required: true },
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const foodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
