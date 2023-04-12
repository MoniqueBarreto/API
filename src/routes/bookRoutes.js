import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router 
    .get("/books", bookController.showBooks)
    .get("/books/search", bookController.showBookByPublishing)
    .get("/books/:id",bookController.showBookById)
    .post("/books", bookController.registerBook)
    .put("/books/:id",bookController.updateBook)
    .delete("/books/:id", bookController.deleteBook)

export default router;


