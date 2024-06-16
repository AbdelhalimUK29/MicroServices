const Product=require("../models/Product")
const upload=require("../middlewares/upload")


exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


exports.createProduct = (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
  
      const { name, description, price, quantity } = req.body;
      const image = req.file ? req.file.path : '';
  
      try {
        const product = new Product({
          name,
          description,
          price,
          quantity,
          image,
        });
  
        await product.save();
        res.status(201).json(product);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  };


exports.updateProduct = (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
  
      const { name, description, price, quantity } = req.body;
      const image = req.file ? req.file.path : '';
  
      try {
        const product = await Product.findById(req.params.id);
  
        if (product) {
          product.name = name || product.name;
          product.description = description || product.description;
          product.price = price || product.price;
          product.quantity = quantity || product.quantity;
          if (image) product.image = image;
  
          await product.save();
          res.json(product);
        } else {
          res.status(404).json({ message: 'Product not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  };


exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        await Product.findByIdAndDelete(req.params.id)
        res.json({ message: 'Product removed' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };