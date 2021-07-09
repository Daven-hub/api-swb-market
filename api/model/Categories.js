const mongoose = require('mongoose');
const CategoriesSchema = mongoose.Schema({
    nom:{
        type: String,
        required:false,
    }
})

//Pour recuperer mon model créer plus
let  Categories = mongoose.model('categories', CategoriesSchema)
module.exports = Categories