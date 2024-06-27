import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";



function Freebook() {
  
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        console.log(res.data);
        const data=res.data.filter((data)=>data.category==="Free")
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);


   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {//1024 is a pixcel
            breakpoint: 1024,//xl
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,//sm
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-bold text-xl pb-2' >Free offered courses</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
        </p>
        </div>
    
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item}key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
  </>
  )
}

export default Freebook
