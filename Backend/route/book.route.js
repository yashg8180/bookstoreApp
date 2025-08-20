import express from "express"
import { getBook, getSingleBook } from "../controller/book.controller.js"

const router=express.Router()

router.get("/",getBook)
router.get("/:id",getSingleBook)

export default router;