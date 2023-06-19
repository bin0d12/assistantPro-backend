// const router = require('express').Router();
const router = require('express').Router()
const custListController = require('../controller/custListController')

router.post('/customerListValue', custListController.storeCustomerList);
// router.get('/productList', productController.productList)

module.exports = router