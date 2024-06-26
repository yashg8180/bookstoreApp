import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'


function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className='m-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
                we are delighted to have you <span  className='text-pink-500'>here!!!!</span>
            </h1>
            <p className='mt-12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit mollitia 
      nisi dolor adipisci officiis facere nobis odit amet minima tenetur nam placeat, aperiam 
      saepe ipsam ipsa? Perferendis assumenda quasi reiciendis, libero tempore officia temporibus
       porro facilis dolor! Cumque, aliquid provident! Enim cupiditate a, amet
        reprehenderit in aliquid itaque nostrum?
    </p>
    <Link to="/">
    <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 text-white'>
      Back
    </button>
    </Link>
    
         </div>
         <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=>(
               <Cards key={item.id} item={item}/> 
            ))
              
            }
         </div>
        </div>
    </>
  )
}

export default Course
