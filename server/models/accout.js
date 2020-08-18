import mongoose from "mongoose";

const { Schema, model } = mongoose;

const account = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    uppercase: true,
  },
});

export const Account = model("accounts", account);
