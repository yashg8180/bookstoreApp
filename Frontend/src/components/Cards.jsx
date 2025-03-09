// import React from 'react'
// import books from "../assets/books.png"
// function Cards({item}) {
//   return (
//     <>
//         <div className='mt-4 my-3 p-3'>
//         <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-700 dark:text-white dark-border">
//   <figure>
//     <img
//       src={books}
//       alt="BOOKS" />
//   </figure>
//   <div className="card-body h-60">
//     <h2 className="card-title">
//       {item.name}
//       <div className="badge badge-secondary">{item.category}</div>
//     </h2>
//     <p>{item.title}</p>
//     <div className="card-actions  flex justify-between">
//       <div className="badge badge-outline">${item.price}</div>
//       <div className=" hover:bg-pink-500 duration-200 hover:text-white cursor-pointer px-2 py-1 rounded-full border-[2px] ">Buy Now</div>
//     </div>
//   </div>
// </div>
//         </div>3
//     </>
//   )
// }

// export default Cards

import React from "react";
import { Link } from "react-router-dom";
import books from "../assets/books.png";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-700 dark:text-white dark-border">
          <figure>
            <img src={books} alt="BOOKS" />
          </figure>
          <div className="card-body h-60">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              {/* ✅ Passing full book data in state */}
              <Link to="/book-details" state={{ book: item }}>
                <div className="hover:bg-pink-500 duration-200 hover:text-white cursor-pointer px-2 py-1 rounded-full border-[2px]">
                  View Details
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;


