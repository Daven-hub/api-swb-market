//Importation de mon model
//Importation de mon model
const Categories = require('../model/Categories')

exports.helloWord =  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
}

//const id = req.params.id
//findById(id)

//Affichage de tous mes Categories
exports.getCategories = (req, res) => {
    var query = ""
    if(req.query.s)  query=req.query.s
 //Rechercher un Categorie spécifique  
  Categories.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
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

//Ajout Categories
exports.addCategories =  (req, res) =>{
    var cat = new Categories({
        nom:req.body.nom,
    })
    cat.save().then((result)=>{
        res.status(201).json({
            message:'Cration réussie',
            data: result
        })
    })

}

//Pour retourner un seul Categorie
exports.getCategorie =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Categories.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Categorie retrouvé',
            data :result
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

//update un Categorie  if(req.body.categorie) cat.categorie=req.boby.categorie
exports.updateCategorie =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let cat = {}
    if(req.body.nom) cat.nom=req.body.nom
   
    console.log(cat.nom)
    Categories.update({_id:id}, {$set:cat}).exec().then(result => {
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

//Delete une Categorie

exports.deleteCategories = (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })

    Categories.remove({_id:id}).exec().then(result => {
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