const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'Please enter Product name'],
        trim: true,
        maxLength:[100,'Please name connot exceed 100 characters']
    },
    price: {
        type:Number,
        required: [true,'Please enter Product name'],
        maxLength:[5,'Please name connot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type:String,
        required: [true,'Please enter Product name'],
    },
    ratings : {
        type : Number,
        dafault: 0 
    },
    image :[
        {
            public_id :{
                type : String,
                required: true,
            },
            url :{
                type : String,
                required: true,
            },
        }
    ],
    category: {
        type : String,
        required: [true,'Please select category for this product'],
        enum : {
            values : [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Clothes/shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message : 'Please select category for this product'
        }
    },
    seller : {
        type:String,
        required: [true,'Please enter Product seller'],
    },
    stock : {
        type:Number,
        required: [true,'Please enter Product stock'],
        maxLength:[5,'Please name connot exceed 5 characters'],
        default: 0
    },
    numOfReviews : {
        type:Number,
        default: 0
    },
    reviews : [
        {
            name : {
                type: String,
                required:true
            },
            rating : {
                type: Number,
                required:true
            },
            comment : {
                type: String,
                required:true
            },
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Product' , productSchema);