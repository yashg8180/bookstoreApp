import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
<<<<<<< HEAD
    title:String,
    description:String
=======
    title:String
>>>>>>> 51e4a54e02018e3fb608358c6f59581f44086b9c
})

const Book=mongoose.model("Book",bookSchema)
//"Book" wale collection mai store hoga sab data
 
export default Book;