import React, { useState } from 'react'
import Gallery from './Gallery'
import "./Body.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import minus from "./images/icon-minus.svg"
import plus from "./images/icon-plus.svg"

const Body = (props) => {
  const [amount, setamount] = useState(0)
  const Inc = () => {
    if(amount===10){
      setamount(10)
    }
    else{
      setamount(amount+1)
    }
  }
  const Dec = () => {
    if(amount===0){
      setamount(0)
    }
    else{
      setamount(amount-1)
    }
  }
  const Add2Cart = () => {
    props.Dets(amount)
    setamount(0)
  }
  const CloseCart = () => {
    // props.Cart("close")
  }
  if(props.Empty===0){
    setamount(0)
    // props.Dets(amount)
  }

  return (
    <div className='body' onClick={CloseCart}>
      <Gallery/>
      <div className='rgttxt'>
        <span className='tnyhd'>SNEAKER COMPANY</span>
        <h1 className='bgsbhd'>Fall Limited Edition Sneaker</h1>
        <div className='rgtxt'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
        </div>
        <div className='price'>
          <div className='pdets'>
            <span className='nwprice'>$125.00</span>
            <span className='oldprice'>$250.00</span>
          </div>
          <div className='pcntdiv'>
            <span className='pcnt'>
              50%
            </span>
          </div>
        </div>
        <div className='crtsec'>
          <div className='crt' onClick={Add2Cart}><AiOutlineShoppingCart className='cart'/><span className='crttxt'> Add to cart</span></div>
          <div className='counter'>
            <div className='dec' onClick={Dec}><img src={minus} alt="minus"/></div>
            <span className='count'>{amount}</span>
            <div className='dec' onClick={Inc}><img src={plus} alt="plus"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body