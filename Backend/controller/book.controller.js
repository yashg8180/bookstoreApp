
import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

export const addBook = async (req, res) => {
  try {
    const { name, price, category, image, description, title } = req.body;
    const newBook = new Book({
      name,
      price,
      category,
      image,
      description,
      title
    });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
}

// Add multiple books at once
export const addBooksBulk = async (req, res) => {
  try {
    const booksData = req.body; // expecting an array of book objects

    if (!Array.isArray(booksData)) {
      return res.status(400).json({ message: "Data must be an array of books" });
    }

    const insertedBooks = await Book.insertMany(booksData);
    res.status(201).json({ 
      message: "Books added successfully", 
      count: insertedBooks.length, 
      books: insertedBooks 
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json(error);
  }
};



export const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

// for book recommendation

// import natural from "natural";

// const TfIdf = natural.TfIdf;
// let tfidf = new TfIdf();
// let booksCache = [];

// // Build TF-IDF model
// const buildModel = async () => {
//   booksCache = await Book.find();
//   tfidf = new TfIdf();
//   booksCache.forEach((book, idx) => {
//     tfidf.addDocument(`${book.title} ${book.description}`, idx.toString());
//   });
// };
// buildModel(); // Build once at startup

// // ✅ Recommend books
// export const recommendBooks = async (req, res) => {
//   try {
//     const { query } = req.params;

//     let scores = [];
//     tfidf.tfidfs(query, (i, measure) => {
//       scores.push({ book: booksCache[i], score: measure });
//     });

//     // Sort by score (highest first)
//     scores.sort((a, b) => b.score - a.score);

//     // Pick top 5
//     const topBooks = scores.slice(0, 5).map(s => s.book);
//     res.json(topBooks);

//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Error in recommendation" });
//   }
// };

// import Book from "../model/book.model.js";
import natural from "natural";

const TfIdf = natural.TfIdf;

// ✅ Recommend books
export const recommendBooks = async (req, res) => {
  try {
    const { query } = req.params;

    // 1. Always fetch latest books
    const books = await Book.find();

    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books available" });
    }

    // 2. Build TF-IDF model fresh for this request
    const tfidf = new TfIdf();
    books.forEach((book, idx) => {
      tfidf.addDocument(`${book.title} ${book.description}`, idx.toString());
    });

    // 3. Compute similarity scores
    let scores = [];
    tfidf.tfidfs(query, (i, measure) => {
      scores.push({ book: books[i], score: measure });
    });

    // 4. Sort by score (highest first)
    scores.sort((a, b) => b.score - a.score);

    // 5. Pick top 6
    const topBooks = scores.slice(0, 6).map(s => s.book);
    res.json(topBooks);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error in recommendation" });
  }
};
