const mongoose = require('mongoose');
const SellersSchema = mongoose.Schema({
    nom:{
        type: String,
        required:false,
        default:"Maxime Tsafack"
    },
    prenom:{
        type: String,
        required:true,
    },
      email:{
            type: String,
            required:true,
    },
      telephone:{
           type: Number,
           required: true
    }
})

//Pour recuperer mon model créer plus
let  Sellers = mongoose.model('Sellers', SellersSchema)
module.exports = Sellers