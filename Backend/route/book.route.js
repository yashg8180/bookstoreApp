// import express from "express"
// import { getBook, getSingleBook } from "../controller/book.controller.js"

// const router=express.Router()

// router.get("/",getBook)
// router.get("/:id",getSingleBook)

// export default router;
import express from "express";
import { getBook, getSingleBook, addBook } from "../controller/book.controller.js";

const router = express.Router();

// Fetch all books
router.get("/", getBook);

// Fetch single book by ID
router.get("/:id", getSingleBook);

// Add a new book
router.post("/add", addBook);

export default router;
