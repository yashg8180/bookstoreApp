import express from "express";
import { saveContact } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/", saveContact); // ✅ POST request for contact

export default router;
