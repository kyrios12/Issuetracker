const express = require('express');

const router = express.Router();
// Home controller to display home screen
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);