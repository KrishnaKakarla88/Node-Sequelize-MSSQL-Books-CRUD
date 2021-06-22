// Dependencies
// =============================================================
const router = require("express").Router();
const { Op } = require("sequelize");
const Book = require("../models/book.js");

// Routes
// =============================================================

// Get all books
router.get("/books", async (req, res) => {
  const bookResults = await Book.findAll({});
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all books of a specific book id
router.get("/books/:id", async (req, res) => {
  console.log("ID :::", "%" + req.params.id + "%");
  const bookResults = await Book.findAll({
    where: {
      id: req.params.id      
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all books of a specific book name
router.get("/books/:title", async (req, res) => {
  console.log("title :::", "%" + req.params.title + "%");
  const bookResults = await Book.findAll({
    where: {
      // title: req.params.title
      title: {
        [Op.like]: "%" + req.params.title + "%",
      },
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all books of a specific genre
router.get("/genres/:genre", async (req, res) => {
  // console.log("genre :::", req.params.genre);
  const bookResults = await Book.findAll({
    where: {
      // genre: req.params.genre,
      genre: {
        [Op.like]: "%" + req.params.genre + "%",
      },
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all books from a specific author
router.get("/authors/:author", async (req, res) => {
  // console.log("author :::", req.params.author);
  const bookResults = await Book.findAll({
    where: {
      // author: req.params.author,
      author: {
        [Op.like]: "%" + req.params.author + "%",
      },
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all "long" books (books 150 pages or more)
router.get("/books/length/long", async (req, res) => {
  const bookResults = await Book.findAll({
    where: {
      pages: {
        [Op.gt]: 149,
      },
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Get all "short" books (books 150 pages or less)
router.get("/books/length/short", async (req, res) => {
  const bookResults = await Book.findAll({
    where: {
      pages: {
        [Op.lt]: 150,
      },
    },
  });
  // console.log("bookResults :::", bookResults);
  res.send(bookResults);
});

// Insert New book
router.post("/new", async (req, res) => {
  // console.log("req.body::: ", req.body);
  const bookResults = await Book.create(req.body);
  // console.log("bookResults ::: ", bookResults);
  res.send(bookResults);
});

// Get all "short" books (books 150 pages or less)
router.delete("/book/:id", async (req, res) => {
  // console.log("author :::", req.params.id);
  const bookResults = await Book.destroy({
    where: {
      id: req.params.id,
    },
  });
  // console.log("bookResults ::: ", bookResults);
  res.json(bookResults);
});

module.exports = router;
