import mongoose from "mongoose";

const { Schema, model } = mongoose;

const purchase = new Schema ({
  stock: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number
  },
  account: {
    type: Schema.Types.ObjectId,
    rel: 'accoutns'
  }
})

export const Purchase= model('purchase', purchase)

