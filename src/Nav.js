import React,{Component} from "react";
import "./App.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">Logo</div>
            <ul className="nav-items">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact US</a></li>
            </ul>
        </div>
    )
}

export default Navbar;