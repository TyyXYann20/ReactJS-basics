import React from "react";
import "./style.header.css"

const MainHeader = () =>{

    return(
        <div className="container">
        <div className="glass-container">
            <nav className="navbar">
                <div className="logo"><a href="#">AsmrProg</a></div>
                <ul className="nav-links">
                    <li className="nav-link"><a href="#">Home</a></li>
                    <li className="nav-link"><a href="#">Youtube</a></li>
                    <li className="nav-link"><a href="#">About</a></li>
                </ul>
            </nav>
           
        </div>
    </div>
    )

}
export default MainHeader;