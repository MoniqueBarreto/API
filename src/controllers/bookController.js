import books from "../models/book.js";

class bookController {

    static showBooks = (req,res)=> {
        books.find()
            .populate('author') // insert author
            .exec((err, books) => {
            res.status(200).json(books)
        })
    }

    static showBookById = (req,res) => {
        const id = req.params.id;

        books.findById(id)
        .populate('author','name')
        .exec((err,books) => {
            if (err){
                res.status(400).send({message:`${err.message}- Id book not found` })
            }else {
                res.status(200).send(books);

            }
        })

    }

    static registerBook = (req,res)=> {
        let book  = new books(req.body);

        book.save ((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - Failed to register a book.`})
            }else{
                res.status(201).send(book.toJSON())
            }
        })
      
    }

    static updateBook = (req,res)=> {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set:req.body},(err) => {
            if(!err) {
                res.status(200).send({message:'Book update'})
            } else {
                res.status(500).send({message: err.message})
            }  
            
        })
    }

    static deleteBook = (req,res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id,(err) => {
            if(!err) {
                res.status(200).send({message:'Book delete'})
            } else {
                res.status(500).send({message: err.message})
            }  
            
        })
    }

    static showBookByPublishing = (req,res) => {
        const publishing = req.query.publishing;

        books.find({'publishing':publishing},{},(err,books)=> {
            res.status(200).send(books);
        })
    }

}

export default bookController