import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cards from './Cards';

const RecommendationPage = () => {
  const { query } = useParams();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendations = async () => {
      const res = await fetch(`http://localhost:4002/book/recommend/${query}`);
      const data = await res.json();
      setBooks(data);
    };
    fetchRecommendations();
  }, [query]);

  return (
    <div className="p-6 relative">
      {/* 🔙 Back Button in top-right */}
      <button
        onClick={() => navigate("/")}
        className="absolute right-6 top-6 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition"
      >
        Back
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Recommendations for "{query}"
      </h2>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <Cards key={book._id} item={book} />
          ))}
        </div>
      ) : (
        <p>No recommendations found.</p>
      )}
    </div>
  );
};

export default RecommendationPage;
