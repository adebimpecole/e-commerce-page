import React, { useState } from 'react'
import big1 from "./images/image-product-1.jpg"
import big2 from "./images/image-product-2.jpg"
import big3 from "./images/image-product-3.jpg"
import big4 from "./images/image-product-4.jpg"
import small1 from "./images/image-product-1-thumbnail.jpg"
import small2 from "./images/image-product-2-thumbnail.jpg"
import small3 from "./images/image-product-3-thumbnail.jpg"
import small4 from "./images/image-product-4-thumbnail.jpg"
import "./Gallery.css"

const Gallery = () => {
  const selcted = document.getElementsByClassName("smlpicspan")
  const selectimg = document.getElementsByClassName("pic")

  const bigimg = [big1, big2, big3, big4]

  const [bimg, setbimg] = useState(big1)
  // console.log(selcted[0].children)

  const Active = (data) => {
    for(let s=0; s<selcted.length; s++){
      if(selcted[s].classList.contains("act")){
        selcted[s].classList.remove('act')
        selectimg[s].classList.remove("active")
      }
      // if(selectimg[s].classList.contains("active")){
      //   console.log("in")
      // }
    }
    data.currentTarget.classList.add('act');
    selcted[data.currentTarget.id].firstChild.classList.add("active")
    setbimg(bigimg[data.currentTarget.id]);
    }

  return (
    <div className='gallery'>
        <img alt='bigpic' src={bimg} className="bigpic"/>
        <div className='smlpics'>
        <span className='smlpicspan act' onClick={Active} id={0}><img src={small1} alt="smallpic" className='ch pic active'/></span>
        <span className='smlpicspan' onClick={Active} id={1}><img src={small2} alt="smallpic" className='ch pic'/></span>
        <span className='smlpicspan' onClick={Active} id={2}><img src={small3} alt="smallpic" className='ch pic'/></span>
        <span className='smlpicspan' onClick={Active} id={3}><img src={small4} alt="smallpic" className='ch pic'/></span>
        </div>
    </div>
  )
}

export default Gallery