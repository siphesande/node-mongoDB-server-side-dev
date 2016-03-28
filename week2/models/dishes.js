var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

//DEFINING A COMMENT SCHEMA
var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
},
 {
    timestamps: true
});

// define a schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    image: {
        type: String,
        required: true,
        default: ""
    },
    category: {
        type: String,
        required: true,
        default: ''
    },
    label: {
        type: String,
        default: ""
    },
    price: { 
      type: Currency 
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
},

  {
    timestamps: true
});


//Creating a model 
var Dishes = mongoose.model('Dish', dishSchema);

/* make this available to our Node applications*/
module.exports = Dishes;