import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
});

export const Product = models.Product || model('Product', ProductSchema);

export default Product;