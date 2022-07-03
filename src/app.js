import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product';
import userRouter from './routes/user'
import cateRouter from './routes/category'


import cors from 'cors'
// const admin = require('./routes/user');
const app = express();
// middleware
app.use(express.json());
app.use(cors());
    //Routing
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", cateRouter)


    // connect database
mongoose.connect("mongodb://localhost:27017/asm-nodejs")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))

//Connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Sever running port: ${PORT}`);
})