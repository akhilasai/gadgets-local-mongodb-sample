const express = require("express");

const {
  getAllGadgets,
  getGadgetById,
} = require("../controllers/gadget.controller");

const router = express.Router();

// Write code for the route to get all gadgets below using getAllGadgets function
router.get('/gadgets',getAllGadgets)
// Write code for the route to get a gadget by ID below using getGadgetById function
router.get('/gadget/:id',getGadgetById)

module.exports = router;