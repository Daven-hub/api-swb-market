// Importer express 
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const articles = require('./api/router/articles')
const customers = require('./api/router/customers')
const sellers = require('./api/router/sellers')
const categories = require('./api/router/categories')
// Initialise l'application 
const app = express();
dotenv.config()


// Configure bodyparser to handle post requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Connexion réussie a la BD"));



// Configuration du port du serveur 
const port = process.env.PORT || 8080 ;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/articles', articles)
app.use('/customers', customers)
app.use('/sellers', sellers)
app.use('/categories', categories)
// Lancer l'application pour écouter le port spécifié 
app.listen(port, function () { 
     console.log("Exécution de RestHub sur le port " + port); 
});