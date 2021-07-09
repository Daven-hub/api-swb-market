const articlesController = require('../controller/articlesController')

// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', articlesController.getArticles);
router.post('/', articlesController.addArticles);
router.get('/:id', articlesController.getArticle);
router.put('/:id', articlesController.updateArticle);
router.delete('/:id', articlesController.deleteArticles);
// Export API routes
module.exports = router;