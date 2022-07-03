import mongoose, { ObjectId } from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    image: {
        type: String
    },

    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }

}, { timestamps: true })
export default mongoose.model('Product', productSchema);