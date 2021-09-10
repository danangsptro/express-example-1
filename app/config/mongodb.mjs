import dotenv from "dotenv"
import mongoose from "mongoose"
    
dotenv.config()

try {
    mongoose.connect(process.env.MONGO_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("connection success"))
    .catch((err) => console.log(err))
} catch (error) {
    console.log(error);
}
export default mongoose