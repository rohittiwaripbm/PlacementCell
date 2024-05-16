import mongoose from "mongoose";
const url = process.env.DB_URL;

export const connectDB = async()=>
    {
        try{
            await mongoose.connect(url,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
              });
              console.log("Database Connection established successfully");
        }
        catch(error){
            console.log(error);
        }
    }