import Category from "../models/category";
import slugify from "slugify";
import Product from '../models/product';
export const list = async(req, res) => {
    // get All
    try {
        const categorys = await Category.find().exec();
        res.json(categorys);
    } catch (erro) {
        res.status(400).json({
            message: "Lay danh muc khong thanh cong"
        })
    }
}
export const get = async(req, res) => {
    try {
        const categorys = await Category.findOne({ _id: req.params.id }).exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            message: "Lay danh muc ko thanh cong"
        })
    }
}
export const create = async(req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "Them danh muc khong thanh cong"
        })
    }
}
export const read = async(req, res) => {
    // get all
    try {
        const category = await Category.findOne({ slug: req.params.slug }).exec();
        const products = await Product.find({ category:category }).populate('category').select('-category').exec();
        console.log('products', products);
        res.json({
            category,
            products
        });

    } catch (erro) {
        res.status(400).json({
            message: "loi"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "Xoa danh muc ko thanh cong"
        })
    }
}
export const update = async(req, res) => {
    const condition = { _id: req.params.id };
    const update = req.body;
    const optional = { new: true }
    try {
        const category = await Category.findOneAndUpdate(condition, update, optional).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Cap nhat ko thanh cong"
        })
    }
}