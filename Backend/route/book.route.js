// import express from "express"
// import { getBook, getSingleBook } from "../controller/book.controller.js"

// const router=express.Router()

// router.get("/",getBook)
// router.get("/:id",getSingleBook)

// export default router;
import express from "express";
import { getBook, getSingleBook, addBook, recommendBooks,addBooksBulk } from "../controller/book.controller.js";

const router = express.Router();

// Fetch all books
router.get("/", getBook);

// Fetch single book by ID
router.get("/:id", getSingleBook);

// Add a new book
router.post("/add", addBook);

router.post("/add-bulk", addBooksBulk); // 🔹 New bulk route
// ✅ Recommendation endpoint
router.get("/recommend/:query", recommendBooks);

export default router;
