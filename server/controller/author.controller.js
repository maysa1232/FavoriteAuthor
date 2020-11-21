const Author = require("../models/author.model");

//Get all Authors
module.exports.getAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json({authors: allAuthors }))
    .catch(err => res.json({message:" Erro you can't gett All products....", error: err }));
}

//Get One author
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
    .then(getAuthor=> res.json({authors: getAuthor }))
    .catch(err => res.json({message:" Erro you can't gett one product....", error: err }));
}

//Make new Author
module.exports.newAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.json({authors: newAuthor }))
    .catch(err => res.json({error: err}));
}

//update author
module.exports.updateAuthor = (req, res) => {
    Author.update({_id: req.params._id}, {
        $set: {
            name: req.body.name
        }
    }, {runValidators: true})
    .then(updateAuthor => res.json({authors: updateAuthor}))
    .catch(err => console.log(err));
}

//delete author
module.exports.deleteAuthor = (req, res) => {
    Author.remove({_id: req.params._id })
    .then(delAuth => res.json({message: "Oh no.. deleted your author"}))
    .catch(err => res.json({message:" Erro you can't delete author....", error: err }));

}
