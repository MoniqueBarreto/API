import mongoose from "mongoose";

const authorSchema = new mongoose.Schema (
    {
        id: {type:String},
        name:{type: String,required:true},
        country: {type: String}
    },
    { //if i must get a field
        versionKey: false 
    }

)

const authors = mongoose.model("authors",authorSchema);

export default authors;