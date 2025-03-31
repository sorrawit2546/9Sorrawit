"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//import controller
const { register } = require('../controllers/auth_controller');
const { login, getUser } = require('../controllers/auth_controller');
router.post('/register', register); // Create a new route for the controller
router.get('/users', getUser);
router.post('/login', login); // Create a new route for the controller
module.exports = router; // Export the router
