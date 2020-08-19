import express from "express";
import faker from "faker";
import { Account } from "../models/accout.js";
import { Purchase } from "../models/purchase.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("FINAM");
  })
  .put(async (req, res) => {
    const { user } = req.body;
    const account = await Account.create({
      title: faker.finance.account(),
      owner: user,
    });
    res.json(account);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    await Account.findOneAndDelete({ title: id });
    const result = await Account.find({});
    console.log(result);
    res.json(result);
  });

router
  .route("/show")
  .get(async (req, res) => {
    const all = await Account.find({});
    res.json(all);
  })
  .put(async (req, res) => {
    const { id } = req.body;
    const det = await Account.findOneAndUpdate(
      { title: id },
      {
        title: faker.finance.account(),
      },
      { new: false }
    );
    const result = await Account.find({});
    res.json(result);
  });
export default router;
