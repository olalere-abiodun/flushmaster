import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="footer-content">
     <section className="bottom-nav">
        <img src="/assets/images/flush-logo.png" alt="Flush Master Logo" className="sm-logo" />
        <nav>
            <a href="#">Home</a><a href="">About</a><a href="">Services</a><a href="">Contact</a>
        </nav>
        <div className="social">
            <img src="/assets/images/instagram.svg" alt="Instagram" />
            <img src="/assets/images/facebook.svg" alt="Facebook" />
        </div>
     </section>
   </div>
   <div className="footer-bottom">
    <p>&copy; {year} Flush Master. All rights reserved.</p>
   </div>
    </footer>
  );
};

export default Footer;
