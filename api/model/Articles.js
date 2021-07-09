const mongoose = require('mongoose');
const ArticlesSchema = mongoose.Schema({
    nom:{
        type: String,
        required:false,
        default:"Le Grand Pat"
    },
    prix:{
        type:Number,
        required:true,
    },
      categorie:{
            type: String,
            required:true,
    }
})

//Pour recuperer mon model créer plus
let  Articles = mongoose.model('articles', ArticlesSchema)
module.exports = Articles