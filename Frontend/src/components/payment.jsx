// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const navigate = useNavigate();
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//     name: "",
//   });

//   const handleInputChange = (e) => {
//     setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = () => {
//     alert("Payment Successful! 🎉");
//     navigate("/");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 to-indigo-300 dark:from-gray-900 dark:to-gray-800">
//       <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-md w-full text-center transition-all duration-500 hover:scale-105">
//         {/* Payment Title */}
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment</h1>

//         {/* Card Details Form */}
//         <form className="mt-6 space-y-4">
//           <div>
//             <label className="block text-left text-gray-700 dark:text-gray-300 font-semibold">Card Number</label>
//             <input
//               type="text"
//               name="cardNumber"
//               value={paymentDetails.cardNumber}
//               onChange={handleInputChange}
//               placeholder="1234 5678 9101 1121"
//               className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//             />
//           </div>

//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-left text-gray-700 dark:text-gray-300 font-semibold">Expiry Date</label>
//               <input
//                 type="text"
//                 name="expiry"
//                 value={paymentDetails.expiry}
//                 onChange={handleInputChange}
//                 placeholder="MM/YY"
//                 className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-left text-gray-700 dark:text-gray-300 font-semibold">CVV</label>
//               <input
//                 type="text"
//                 name="cvv"
//                 value={paymentDetails.cvv}
//                 onChange={handleInputChange}
//                 placeholder="123"
//                 className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-left text-gray-700 dark:text-gray-300 font-semibold">Cardholder Name</label>
//             <input
//               type="text"
//               name="name"
//               value={paymentDetails.name}
//               onChange={handleInputChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//             />
//           </div>
//         </form>

//         {/* Action Buttons */}
//         <div className="mt-6 flex justify-center space-x-4">
//           <button
//             className="bg-gray-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
//             onClick={() => navigate(-1)}
//           >
//             Back
//           </button>
//           <button
//             className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:bg-green-700 dark:hover:bg-green-600 animate-pulse"
//             onClick={handlePayment}
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
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


