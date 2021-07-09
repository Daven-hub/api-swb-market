//Importation de mon model
const Articles = require('../model/Articles')

exports.helloWord =  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
}

//const id = req.params.id
//findById(id)

//Affichage de tous mes articles
exports.getArticles = (req, res) => {
    var query = ""
    if(req.query.s)  query=req.query.s
 //Rechercher un article spécifique  
  Articles.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
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

//Ajout d'articles
exports.addArticles =  (req, res) =>{
    var art = new Articles({
        nom:req.body.nom,
        prix:req.body.prix,
        categorie:req.body.categorie
    })
    art.save().then((result)=>{
        res.status(201).json({
            message:'Cration réussie',
            data: result
        })
    })

}

//Pour retourner un seul article
exports.getArticle =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Articles.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Article retrouvé',
            data :result
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

//update un article  if(req.body.categorie) art.categorie=req.boby.categorie
exports.updateArticle =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let art = {}
    if(req.body.nom) art.nom=req.body.nom
    if(req.body.prix) art.prix=req.body.prix
    if(req.body.categorie) art.categorie=req.boby.categorie
    console.log(art.nom)
    Articles.update({_id:id}, {$set:art}).exec().then(result => {
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

exports.deleteArticles = (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })

    Articles.remove({_id:id}).exec().then(result => {
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