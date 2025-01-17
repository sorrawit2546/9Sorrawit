import express from 'express';
const router = express.Router();
//import controller
const {register} = require('../controllers/auth_controller');
const {login , getUser} = require('../controllers/auth_controller');

router.post('/register' , register); // Create a new route for the controller
router.get('/users' , getUser);
router.post('/login' , login); // Create a new route for the controller

module.exports = router;   // Export the router