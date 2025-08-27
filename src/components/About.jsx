import React from "react";
import Button from "./Button";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div>
          <h3>About Us</h3>
          <h1>Who we are and what we do</h1>
          <p>
            We are a trusted team of professional plumbers dedicated to
            delivering reliable, affordable, and high-quality plumbing
            solutions. Our services cover everything from routine maintenance
            and quick repairs to complex installations and emergency plumbing
            needs. Whether it’s fixing leaks, unclogging drains, installing
            water heaters, or managing full plumbing projects, we ensure that
            every job is handled with precision and care. Our mission is to
            provide lasting solutions that bring comfort, safety, and peace of
            mind to every home and business we serve.
          </p>
          <Button label="Find Out More" color="#3957FF" />
        </div>
        <div className="about-image">
            <img src="assets/images/flush.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
