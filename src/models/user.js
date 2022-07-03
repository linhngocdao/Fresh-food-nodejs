import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { createHmac } from "crypto";
const uersChema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    salt:{
        type:String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

uersChema.methods = {
    authenticate(password) {
        return this.password == this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex');

        } catch (error) {
            console.log(error)
        }
    }
}
uersChema.pre("save", function(next) {
    try {
        this.salt = uuidv4();
        this.password = this.encryptPassword(this.password);
        next();
    } catch (error) {
        return next(error);
    }
})
export default mongoose.model("User", uersChema)