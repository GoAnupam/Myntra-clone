import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
function Header() {
   const bagItems =useSelector(store=>store.bag)
   const bagCount=bagItems.length;
  return (
    <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">                                                
                <span className="action_name"><IoPersonCircle /></span>
            </div>

            <div className="action_container">
                <span className="action_name"><CiHeart /></span>
            </div>

            <Link className="action_container" to="/bag">
                <span className="action_name"><IoCartSharp /></span>
                <span className="bag-item-count">{bagCount}</span>
            </Link>
        </div>

        </header> 
        </>
  )
}

export default Header