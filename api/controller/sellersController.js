// Importation de mon model
const Sellers = require('../model/Sellers')

exports.helloWord =  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
}

// Affichage de tous mes utilisateurs Vendeurs
exports.getSellers = (req, res) => {
    var query = ""
    if(req.query.s)  query=req.query.s
 //Rechercher un Vendeur spécifique  
  Sellers.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
      res.status(200).json({
          count: result.length,
          data: result
      })
  }).catch(error =>{
      console.log(error)
      res.status(500).json({
          error
      })
  })
}

//Ajouter un utilisateur Vendeur
exports.addSellers =  (req, res) =>{
    var art = new Sellers({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        telephone:req.body.telephone
    })
    art.save().then((result)=>{
        res.status(201).json({
            message:'Vendeur ajouté',
            data: result
        })
    })

}

//Pour retourner un seul Vendeur
exports.getSeller =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Sellers.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Vendeur retrouvé',
            data :result
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

//update un Vendeur  if(req.body.categorie) art.categorie=req.body.categorie
exports.updateSeller =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let sell = {}
    if(req.body.nom) sell.nom=req.body.nom
    if(req.body.prenom) sell.prenom=req.body.prenom
    if(req.body.email) sell.email=req.body.email
    if(req.body.telephone) sell.telephone=req.body.telephone
    console.log(sell.nom)
    Sellers.update({_id:id}, {$set:sell}).exec().then(result => {
        res.status(200).json({
            message : 'Modification réussie',
            data : result
        })

    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

//Delete un article

exports.deleteSellers = (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })

    Sellers.remove({_id:id}).exec().then(result => {
        res.status(200).json({
            message : 'Suppression reussie'
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}
