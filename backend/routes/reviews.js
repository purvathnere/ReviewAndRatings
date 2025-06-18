const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch all products
router.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Fetch all reviews
router.get('/all-reviews', (req, res) => {
  console.log("✅ GET /all-reviews called");
  
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) {
      console.error("Error fetching reviews:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Fetch reviews for a specific product
router.get('/reviews/:productId', (req, res) => {
  const productId = req.params.productId;
  
  db.query('SELECT * FROM reviews WHERE product_id = ?', [productId], (err, results) => {
    if (err) {
      console.error("Error fetching reviews for product:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Add a new review
router.post('/review', (req, res) => {
  const { product_id, user, rating, review, photo_url } = req.body;

  if (!product_id || !user) {
    return res.status(400).json({ error: "Product ID and User are required" });
  }

  db.query(
    'INSERT INTO reviews (product_id, user, rating, review, photo_url) VALUES (?, ?, ?, ?, ?)',
    [product_id, user, rating || null, review || null, photo_url || null],
    (err) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'User already reviewed this product' });
        }
        console.error("Error inserting review:", err);
        return res.status(500).json({ error: "Database insertion failed" });
      }
      res.json({ success: true });
    }
  );
});

module.exports = router;
