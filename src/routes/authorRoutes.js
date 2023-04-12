import express from "express";
import authorController from "../controllers/authorsController.js";

const router = express.Router();

router 
    .get("/authors", authorController.showAuthors)
    .get("/authors/:id",authorController.showAuthorById)
    .post("/authors", authorController.registerAuthor)
    .put("/authors/:id",authorController.updateAuthor)
    .delete("/authors/:id", authorController.deleteAuthor)

export default router;

