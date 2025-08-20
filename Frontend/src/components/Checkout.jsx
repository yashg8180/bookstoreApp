

import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, CheckIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
          🛒 Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <BookOpenIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" /> Checkout
        </h1>
        <p className="text-gray-500 dark:text-gray-400">Confirm your purchase details</p>
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{book.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{book.category}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">${book.price}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" /> Back
          </button>
          <button
            onClick={() => navigate("/payment", { state: { book } })}
            className="flex-1 flex items-center justify-center px-6 py-3 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
          >
            Confirm <CheckIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;











