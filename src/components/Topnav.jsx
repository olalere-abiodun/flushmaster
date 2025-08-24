import React from "react";

function Topnav() {
  return (
   <div className="header">
     <header className="topnav">
        <img src="/assets/images/flush-logo.png" alt="Flush Master Logo" className="logo" />
        <nav>
            <a href="#">Home</a><a href="">About</a><a href="">Services</a><a href="">Contact</a>
        </nav>
        <div className="contact">
            <img src="/assets/images/phone.svg" alt="Contact" />
            <div>
                <span>Contact Me!</span>
                <span>08168901471</span>
            </div>
        </div>
     </header>
   </div>
  );
};

export default Topnav;
