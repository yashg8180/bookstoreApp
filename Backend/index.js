import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Apply CORS middleware before defining any routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to mongo db");
} catch (error) {
    console.log("error", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
