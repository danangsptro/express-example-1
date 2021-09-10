const mongoose =  require('mongoose')
const dotenv = require('dotenv')
    
dotenv.config()

try {
    mongoose.connect(process.env.MONGO_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((res) => console.log("connection success"))
    .catch((err) => console.log(err))
} catch (error) {
    console.log(error);
}

export default mongoose