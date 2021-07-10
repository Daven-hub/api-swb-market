// Importation de mon model
const Customers = require('../model/Customers')

exports.helloWord =  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
}

// Affichage de tous mes utilisateurs clients
exports.getCustomers = (req, res) => {
    var query = ""
    if(req.query.s)  query=req.query.s
 //Rechercher un Client spécifique  
  Customers.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
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

//Ajouter un utilisateur Client
exports.addCustomers =  (req, res) =>{
    var art = new Customers({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        telephone:req.body.telephone
    })
    art.save().then((result)=>{
        res.status(201).json({
            message:'Client ajouté',
            data: result
        })
    })

}

//Pour retourner un seul client
exports.getCustomer =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Customers.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Client retrouvé',
            data :result
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

//update un client  if(req.body.categorie) art.categorie=req.body.categorie
exports.updateCustomer =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let cust = {}
    if(req.body.nom) cust.nom=req.body.nom
    if(req.body.prenom) cust.prenom=req.body.prenom
    if(req.body.email) cust.email=req.body.email
    if(req.body.telephone) cust.telephone=req.body.telephone
    console.log(cust.nom)
    Customers.update({_id:id}, {$set:cust}).exec().then(result => {
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

exports.deleteCustomers = (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })

    Customers.remove({_id:id}).exec().then(result => {
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
