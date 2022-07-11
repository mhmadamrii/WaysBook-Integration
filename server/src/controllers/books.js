const { books, users } = require("../../models");

// Add new product
exports.addBooks = async (req, res) => {
  try {
    
    const data = {
      title: req.body.title,
      publicationdate: req.body.date,
      pages: req.body.pages,
      isbn: req.body.isbn,
      author: req.body.author,
      price: req.body.price,
      description: req.body.desc,
      promobook: req.body.promobook,
      bookattachment: req.files['bookattachment'][0].filename,
      thumbnail: req.files['thumbnail'][0].filename,
      idUser: req.user.id,
    };

    let newBook = await books.create(data);

    let bookData = await books.findOne({
      where: {
        id: newBook.id,
      },
      include: [
        {
          model: users,
          as: 'users',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        }
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });
    
    bookData = JSON.parse(JSON.stringify(bookData));

    res.send({
      status: 'success...',
      data: {
        ...bookData,
        bookattachment: process.env.PATH_FILE + bookData.bookattachment,
        thumbnail: process.env.PATH_FILE + bookData.thumbnail
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
