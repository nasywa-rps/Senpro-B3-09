const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
} = require('../controllers/AdminController');


// Create a new admin
router.post('/', createAdmin);

// Get all admins
router.get('/', getAllAdmins);

// Get an admin by ID
router.get('/:id', getAdminById);

// Update an admin by ID
router.put('/:id', updateAdmin);

// Delete an admin by ID
router.delete('/:id', deleteAdmin);

module.exports = router;