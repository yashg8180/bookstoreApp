import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4002/book/${id}`);
        setBook(res.data);
      } catch (err) {
        setError("Failed to load book details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10 text-gray-600">
        Loading Book Details...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center text-2xl mt-10 text-red-600">
        {error}
      </h2>
    );
  }

  if (!book) {
    return (
      <h2 className="text-center text-2xl mt-10 text-gray-600">
        No Book Details Available
      </h2>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 dark:bg-slate-900 px-4">
      <div className="bg-base-100 dark:bg-slate-800 shadow-2xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Left: Book Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={book.image || "/default-book.png"}
            alt={book.name}
            className="w-60 h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right: Book Details */}
        <div className="flex flex-col justify-between text-center md:text-left">
          {/* Book Name */}
          <h1 className="text-4xl font-bold text-[#00E5FF]">
            {book.name}
          </h1>

          {/* Category Badge */}
          <span className="mt-3 inline-block px-4 py-1 text-sm font-medium bg-pink-500 text-white rounded-full self-center md:self-start">
            {book.category}
          </span>

          {/* Book Title */}
          <p className="mt-3 text-xl italic text-gray-600 dark:text-gray-300">
            {book.title}
          </p>

          {/* Price */}
          <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Price: <span className="text-pink-500">${book.price}</span>
          </p>

          {/* Book Description */}
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {book.description ||
              "This book takes you on a fascinating journey through imagination, knowledge, and emotions. With engaging storytelling and powerful insights, it captivates readers from the very first page. Whether you're looking for adventure, wisdom, or pure entertainment, this book offers a perfect blend of creativity and depth. Its carefully crafted narrative and relatable characters ensure that every reader finds something meaningful to connect with. An inspiring read for students, professionals, and book lovers alike, this title is a must-have addition to your collection."}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="bg-gray-400 dark:bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-all duration-300"
              onClick={() => navigate("/checkout", { state: { book } })}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
