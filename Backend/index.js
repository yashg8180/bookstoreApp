
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";  // <-- Added contact route

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4001;
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
app.use("/user", userRoute);
app.use("/contact", contactRoute);  // <-- Added contact route

// //deployment
// if(process.env.NODE_ENV==="production"){
//    const dirpath=path.resolve();
//    app.use(express.static("Frontend/dist"));
//    app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(dirpath,"Frontend","dist","index.html"));
//    })
// }

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
