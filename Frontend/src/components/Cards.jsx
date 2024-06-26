import React from 'react'

function Cards({item}) {
  return (
    <>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark-border">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334866.jpg"
      alt="BOOKS" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" hover:bg-pink-500 duration-200 hover:text-white cursor-pointer px-2 py-1 rounded-full border-[2px] ">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards

