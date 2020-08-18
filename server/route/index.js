import express from "express";
import {Account} from '../models/accout.js'
import {Purchase} from '../models/purchase.js'

const router = express.Router()


router
  .route('/')
  .get((req,res)=>{
    res.send('FINAM')
  })

export default router
