const express = require("express");
const router = express.Router();
const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

// /api/authors
router.route("/").get(getAllAuthors).post(verifyTokenAndAdmin, createAuthor);

// /api/authors/:id
router
  .route("/:id")
  .get(getAuthorById)
  .put(verifyTokenAndAdmin, updateAuthor)
  .delete(verifyTokenAndAdmin, deleteAuthor);

module.exports = router;
