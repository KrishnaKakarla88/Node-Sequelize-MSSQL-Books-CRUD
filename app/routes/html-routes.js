const router = require('express').Router();
const path = require('path');

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/view.html'));
});

// all route loads the all.html page, where all books in the db are displayed
router.get('/all', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/all.html'));
});

// short route loads the short.html page, where short books in the db are displayed
router.get('/short', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/short.html'));
});

// long route loads the long.html page, where long books in the db are displayed
router.get('/long', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/long.html'));
});

// add route loads the add.html page, where users can enter new books to the db
router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/add.html'));
});

// add route loads the add.html page, where users can enter new books to the db
router.get('/books/:id', (req, res) => {
  console.log("reached /books/id route");
  res.sendFile(path.join(__dirname, '../public/update.html'));
});

// add route loads the add.html page, where users can enter new books to the db
router.get('/update', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/update.html'));
});

// // add route loads the add.html page, where users can enter new books to the db
// router.get('/delete', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/delete.html'));
// });
module.exports = router;
