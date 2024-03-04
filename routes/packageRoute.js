const express = require('express')
const router = express.Router();
const packageController = require('../controllers/packageController');

//Route for creating new package
router.post('/', packageController.createPackage);

//Route for getting all packages
router.get('/', packageController.getAllPackages);

//Route for getting package by ID
router.get('/:id', packageController.getPackage);

//Route for updating a package
router.put('/:id', packageController.updatePackage);

//Route for deleting package
router.delete('/:id', packageController.deletePackage)

module.exports= router;

