// import React, { useState } from "react";
import Button from "./Button";
import Cards from "./Cards";
import testimonial from "../../testimonialdata";

function Testimonial() {
  // track whether we are showing all testimonials or not
//   const [showAll, setShowAll] = useState(false);

  // decide how many to display by default
//   const visibleTestimonials = showAll ? testimonial : testimonial.slice(0, 2);

  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <div>
          <h3>Testimonials</h3>
          <h1>What our clients say about us</h1>
          <p>
            Our clients trust us to deliver exceptional results. Here’s what
            they have to say about their experience working with us.
          </p>
          <Button
            label= "View More"  // {showAll ? "Show Less" : "View More"}
            color="#3957FF"
            // onClick={() => setShowAll(!showAll)}
          />
        </div>

        <div className="testimonials">
          {testimonial.map((item, index) => (
            <Cards
              key={index}
              text={item.text}
              author={item.author}
              images={item.images}
            />
            
          ))} 
        </div>
      </div>
    </div>
  );
}


export default Testimonial;


