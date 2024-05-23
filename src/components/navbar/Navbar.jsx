/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaHome } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { FaMapSigns } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import logo  from "../../assets/logo.jpeg"
import { SlCompass } from "react-icons/sl";
import "./navbar.css"

// design nav bar a gauche
const Navbar = () => {
    return(
        <nav>
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#" className="logo">
                            <img src={logo} alt="logo-ramaka"/>
                            <span className="nav-item">Ramaka</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaHome  className="icon-nav"/>
                            <span className="nav-item">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TbMapSearch  className="icon-nav"/>
                            <span className="nav-item">Maps</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaMapSigns  className="icon-nav"/>
                            <span className="nav-item">Itinerance</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SlCompass className="icon-nav"/>
                            <span className="nav-item">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdContactPhone className="icon-nav"/>
                            <span className="nav-item">Contact us</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar