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
      quantite:{
            type: Number,
            required:true,
    },
    _idsellers:{
        required:false,
    }
})

//Pour recuperer mon model créer plus
let  Articles = mongoose.model('articles', ArticlesSchema)
module.exports = Articles