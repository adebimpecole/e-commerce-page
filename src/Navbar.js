import React, { useState, useEffect } from 'react'
import avatar from "./images/image-avatar.png"
import logo from "./images/logo.svg"
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import imge from "./images/image-product-1.jpg"

// Our order function
const MiniCart = (props) => {
  const Delete = () => {
    document.querySelector('.order').remove()    
    props.Del("delete")
  }
  return(
    <div className='order' style={props.style}>
      <img src={imge} alt="miniimg" className='miniimg'/>
      <div className='odrdets'>
        <span className='ordrnm'>Fall Limited Edition Sneaker</span>
        <span className='prce'>$125 x {props.amnt}  = <span className='ttl'>${125*props.amnt}.00</span></span>
      </div>
      <FaTrashAlt className='trash' onClick={Delete}/>
    </div>
  )
}


const Navbar = (props) => {
  const [crtstyle, sercrtstyle] = useState({display: "none"})
  const [hide, sethide] = useState({display: "none"})
  const [hidetxt, sethidetxt] = useState({display: "none"})

  // opens the cart
  const Cart = ()=> {
    sercrtstyle({...crtstyle, display: "block"})
  }
  
  useEffect(() => {
    // adding orders to the cart if the quantity is 0
    if(props.dets > 0){
      sethide({...hide, display: "flex"})
      sethidetxt({...hidetxt, display:"none"})
      document.querySelector(".chckout").style.display = "flex"
    }
    // hides the checkout button if the cart is empty
    if(props.dets === 0){
      sethide({...hide, display: "none"})
      sethidetxt({...hidetxt, display:"block"})
      document.querySelector(".chckout").style.display = "none"
      // root.render("Your cart is empty")
    }
  }, [props.dets])

  useEffect(() => {
    // closes the cart
    sercrtstyle({...crtstyle, display: "none"})
  }, [props.Shut])
  
  // if(props.shut){
  //   sercrtstyle({...crtstyle, display: "none"})
  // }

  return (
    <div className='Navbar'>
      <div className='lft'>
        <img src={logo} alt='logo' className='logo'/>
        <span className='subnav'>Collections</span>
        <span className='subnav'>Men</span>
        <span className='subnav'>Women</span>
        <span className='subnav'>About</span>
        <span className='subnav'>Contact</span>
      </div>
      <div className='rgt'>
        <AiOutlineShoppingCart className='cartimg' onClick={Cart}/>
        <img src={avatar} alt="avatar" className='avatar'/>
      </div>
      <div className='cartdiv' style={crtstyle}>
        <span className='crthd'>Cart</span>
        <hr></hr>
        <span className='crtcntnt'>
          <span className='emptycrt'>
            <span style={hidetxt}>Your cart is empty</span>
            <MiniCart amnt={props.dets} style={hide} Del={props.Del}/>
            </span>
          <span className='chckout'>Checkout</span>
        </span>
      </div>
    </div>
  )
}

export default Navbar