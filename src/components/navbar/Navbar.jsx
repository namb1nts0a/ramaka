/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { FaMapSigns } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import logo  from "../../assets/logo.jpeg"
import { SlCompass } from "react-icons/sl";
import "./navbar.css"

// design nav bar a gauche
const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    }
    return(
        <nav className={`nav-links ${isCollapsed ? "collapsed" : ""}`}>
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#" className="logo" onClick={toggleNavbar}>
                            <img src={logo} alt="logo-ramaka"/>
                            {!isCollapsed && <span className="nav-item">Ramaka</span>}                     </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaHome  className="icon-nav"/>
                            {!isCollapsed && <span className="nav-item">Home</span>}                   
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TbMapSearch  className="icon-nav"/>
                            {!isCollapsed && <span className="nav-item">Maps</span>}                   
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaMapSigns  className="icon-nav"/>
                            {!isCollapsed && <span className="nav-item">Itinerance</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SlCompass className="icon-nav"/>
                            {!isCollapsed && <span className="nav-item">About</span>}                    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdContactPhone className="icon-nav"/>
                            {!isCollapsed && <span className="nav-item">Contact us</span>}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar