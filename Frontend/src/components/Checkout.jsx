// import { useLocation, useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const book = location.state?.book;

//   if (!book) {
//     return <h2 className="text-center text-2xl mt-10 text-gray-600 dark:text-gray-300">No Items in Cart</h2>;
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
//       <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center transform transition-all duration-500 hover:scale-105">
//         {/* Checkout Title */}
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Checkout</h1>

//         {/* Book Details */}
//         <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md text-left">
//           <p className="text-lg text-gray-800 dark:text-gray-200">
//             <span className="font-semibold text-gray-900 dark:text-white">Book:</span> {book.name}
//           </p>
//           <p className="text-lg text-gray-800 dark:text-gray-200">
//             <span className="font-semibold text-gray-900 dark:text-white">Category:</span> {book.category}
//           </p>
//           <p className="text-lg text-gray-800 dark:text-gray-200">
//             <span className="font-semibold text-gray-900 dark:text-white">Price:</span> 
//             <span className="text-pink-500 text-xl font-semibold"> ${book.price}</span>
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-6 flex justify-center space-x-6">
//           <button
//             className="bg-gray-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
//             onClick={() => navigate(-1)}
//           >
//             Back
//           </button>
//           <button className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:bg-green-700 dark:hover:bg-green-600 animate-pulse">
//             Confirm Purchase
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeftIcon, CheckIcon, BookOpenIcon, TagIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const book = location.state?.book;

//   if (!book) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//         <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
//           🛒 Your cart is empty
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full mx-auto space-y-8">
//         <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
//           <div className="px-8 py-6">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
//                 <BookOpenIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
//                 Checkout
//               </h1>
//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                 Confirm your purchase details
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0">
//                     <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
//                       <TagIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                       {book.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-300">
//                       {book.category}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0">
//                     <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
//                       <CurrencyDollarIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 dark:text-gray-300">Total Price</p>
//                     <p className="text-2xl font-bold text-gray-900 dark:text-white">
//                       ${book.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-8">
//                 <button
//                   onClick={() => navigate(-1)}
//                   className="group flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
//                 >
//                   <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
//                   Back
//                 </button>
//                 {/* <button
//                   class4Name="group flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200"
//                 //   onClick={() => navigate("/payment")}
//                 >
//                   Confirm Purchase

//                   <CheckIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button> */}
//                 <button
//   onClick={() => setShowPayment(true)}
//   className="group flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200"
// >
//   Confirm Purchase
//   <CheckIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
// </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


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











