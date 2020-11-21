const AuthorController = require("../controller/author.controller");

module.exports = app => {
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:_id", AuthorController.getOneAuthor);
    app.post("/api/authors/new", AuthorController.newAuthor);
    app.put("/api/authors/update/:_id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
}