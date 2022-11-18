const express = require('express');
const Model = require('../models/ProductCategorie');
const router = express.Router();

const {
  userAuth,
  checkRole
} = require("../utils/AuthB2C");

//Post Method
router.post(
  '/', 
  userAuth,
  checkRole(["admin","superadmin"]),
  async (req, res) => {
  const data = new Model({
      name: req.body.name,
      products: req.body.products
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

//Get all Method
router.get(
  '/getAll', 
   userAuth,
  checkRole(["admin","superadmin"]),
  async (req, res) => {
  try {
      const data = await Model.find().populate('products');
      res.json(data)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

//Get by ID Method
router.get(
  '/getOne/:id', 
  userAuth,
  checkRole(["admin","superadmin"]),
  async (req, res) => {
  try {
      const data = await Model.findById(req.params.id).populate('products');
      res.json(data)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

//Update by ID Method
router.patch(
  '/update/:id',
  userAuth,
  checkRole(["admin","superadmin"]),
   async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete(
  '/delete/:id', 
  userAuth,
  checkRole(["superadmin"]),
  async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;