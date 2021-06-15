const router = require('express').Router();
const user = require('../controllers/user');
// const nasaImages = require('../controllers/nasaImage');
// const { decoded } = require('../middlewares/checkPermissions');
// const { decode } = require('jsonwebtoken');


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})


router.post('/checkPermission', user.checkPermission);
router.get('/getAllEmployed', user.getAllEmployed);
router.get('/getEmployedById', user.getEmployedById);
router.post('/updateEmployed', user.updateEmployed);
router.post('/setNewEmployed', user.setNewEmployed);

module.exports = router;