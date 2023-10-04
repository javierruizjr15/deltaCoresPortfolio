import React from "react";
import '../index.css'; 
import deltacoreslogo from "../images/DCOGW2.png";
import { Link } from 'react-router-dom';

const LogoLeft = () => {
    
    return (
        <>
        <div>
            <div className="flex-top-left"> 
                <div className="logo-icon">
                    <Link to="/">   {/* Use Link to navigate to home page */}
                        <img 
                            src={deltacoreslogo} 
                            alt="delta cores logo" 
                            style={{width: "70px", height: "65px" }} 
                        /> 
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default LogoLeft;