import { useLocation, useNavigate } from "react-router-dom";
import books from "../assets/books.png";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  if (!book) {
    return <h2 className="text-center text-2xl mt-10 text-gray-600">No Book Details Available</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        {/* Book Image */}
        <img
          src={books || "/default-book.png"}
          alt={book.name}
          className="w-52 h-72 object-cover mx-auto rounded-md shadow-md transition-transform duration-300 hover:scale-105"
        />

        {/* Book Name */}
        <h1 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-white">{book.name}</h1>

        {/* Category Badge */}
        <span className="mt-2 px-3 py-1 text-sm font-medium bg-pink-500 text-white rounded-full">
          {book.category}
        </span>

        {/* Book Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">{book.title}</p>

        {/* Price */}
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
          Price: <span className="text-pink-500">${book.price}</span>
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-gray-400 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-all duration-300"
            onClick={() => navigate("/checkout", { state: { book } })}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
