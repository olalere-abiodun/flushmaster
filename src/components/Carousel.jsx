import React from "react";
import Button from "./Button";

function Carousel() {
  return (
    <main className="carousel">
      <h2>We provide effective Plumbing Solutions</h2>
      <p className="lead">
        Your satisfaction is always our top priority. We are committed to
        delivering reliable, high-quality plumbing solutions. From quick repairs and routine
        maintenance to complete system installations and emergency services, our
        team is ready to handle jobs of any size with efficiency and
        care. Whether you need help with leaky faucets, clogged drains, water
        heater issues, or full-scale plumbing projects, we provide tailored
        services to meet your unique needs.
      </p>

      <Button label="Get Started" color="blue" />
    </main>
  );
}

export default Carousel;
