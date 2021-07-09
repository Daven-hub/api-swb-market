const categoriesController = require('../controller/categoriesController')

const router = require('express').Router();

router.get('/', categoriesController.getCategories);
router.post('/', categoriesController.addCategories);
router.get('/:id', categoriesController.getCategorie);
router.put('/:id', categoriesController.updateCategorie);
router.delete('/:id', categoriesController.deleteCategories);
// Export API routes
module.exports = router;