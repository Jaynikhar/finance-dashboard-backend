import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  amount: Number,

  type: {
    type: String,
    enum: ["income", "expense"]
  },

  category: String,
  date: Date,
  note: String

}, { timestamps: true });

export default mongoose.model("Record", recordSchema);