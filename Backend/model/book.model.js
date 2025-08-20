import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    title:String,
    description:String
})

const Book=mongoose.model("Book",bookSchema)
//"Book" wale collection mai store hoga sab data
 
export default Book;