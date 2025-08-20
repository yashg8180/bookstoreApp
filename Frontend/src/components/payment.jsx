
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CreditCardIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiration: "",
    cvc: "",
    name: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
          No book found. Please go back.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <CreditCardIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" /> Payment Details
        </h1>
        <form onSubmit={handlePaymentSubmit} className="space-y-4">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiration"
              placeholder="MM/YY"
              value={cardDetails.expiration}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={cardDetails.cvc}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={cardDetails.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Pay ${book.price}
          </button>
          {paymentSuccess && <p className="text-green-500 text-center">Payment successful! Redirecting...</p>}
        </form>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full p-3 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> Back
        </button>
      </div>
    </div>
  );
};

export default Payment;


