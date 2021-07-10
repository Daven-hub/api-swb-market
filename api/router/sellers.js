const sellersController = require('../controller/sellersController')

const router = require('express').Router();

router.get('/', sellersController.getSellers);
router.post('/', sellersController.addSellers);
router.get('/:id', sellersController.getSeller);
router.put('/:id', sellersController.updateSeller);
router.delete('/:id', sellersController.deleteSellers);
// Export API routes
module.exports = router;