const db = require("../models");
const Artikel = require("../models/artikel.model");
const TokohWayang = require("../models/tokohWayang.model");

// POST DATA KE DATABASE
exports.postArticle = async (req, res) => {
    const { artikel } = req.body; 
    
    if (!Array.isArray(artikel)) {
      return res.status(400).json({ message: "Data artikel harus berupa array." });
    }
  
    try {
      const savedArticles = await Artikel.insertMany(artikel);
      res.status(201).json(savedArticles); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  };

  exports.postTokohWayang = async (req, res) => {
    const { tokoh_wayang } = req.body; 
      
    if (!Array.isArray(tokoh_wayang)) {
      return res.status(400).json({ message: "Data tokoh wayang harus berupa array." });
    }
  
    try {
      const savedTokohWayang = await TokohWayang.insertMany(tokoh_wayang);
      res.status(201).json(savedTokohWayang); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  }

  // GET DATA DARI DATABASE
exports.getArticle = async (req, res) => {
  try {
    const articles = await Artikel.find();

    if (articles.length == 0) {
      return res.status(200).json({ message: "Artikel Kosong" })
    }
    res.status(200).json(articles); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}

exports.getTokohWayang = async (req, res) => {
  try {
    const tokohWayang = await TokohWayang.find();

    if (tokohWayang.length == 0) {
      return res.status(200).json({ message: "Data Kosong" })
    }
    res.status(200).json(tokohWayang); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}

