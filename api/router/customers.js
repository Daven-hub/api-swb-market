const customersController = require('../controller/customersController')

const router = require('express').Router();

router.get('/', customersController.getCustomers);
router.post('/', customersController.addCustomers);
router.get('/:id', customersController.getCustomer);
router.put('/:id', customersController.updateCustomer);
router.delete('/:id', customersController.deleteCustomers);
// Export API routes
module.exports = router;