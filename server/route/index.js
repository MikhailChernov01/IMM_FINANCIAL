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
  });
router
  .route('/show')
  .get(async(req,res)=>{
    const all = await Account.find({})
    res.json(all)
  })
export default router;
