// routes/factures.js
const express = require('express');
const router = express.Router();
const facturesController = require('../controllers/facturesController');

// Routes pour les factures
router.get('/', facturesController.getAllFactures);
router.get('/:id', facturesController.getFactureById);
router.post('/', facturesController.createFacture);
router.put('/:id', facturesController.updateFacture);
router.delete('/:id', facturesController.deleteFacture);

module.exports = router;