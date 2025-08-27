import React from "react";

function Servicecard() {
  return (
    <div className="services-row">
      <div className="services-col">
        <section className="circle"> <img src="../../assets/images/Vector.svg" alt="" /></section>
        <h4> Installation </h4>
        <p>We provide fast, reliable, and professional installation services. From start to finish, our goal is to make the setup process effortless and convenient for you.</p>

      </div>
      <div className="services-col">
        <section className="circle"> <img src="../../assets/images/hugeicons_repair.svg" alt="" /></section>
        <h4> Repair </h4>
        <p>We provide reliable repair services to restore your equipment to optimal working condition, ensuring efficiency and durability.</p>

      </div>
      <div className="services-col">
        <section className="circle"> <img src="../../assets/images/material-symbols_plumbing.svg" alt="" /></section>
        <h4> Fixing Issues </h4>
        <p>Our team quickly identifies and resolves technical problems, keeping your systems running smoothly without interruptions.</p>

      </div>
      <div className="services-col">
         <section className="circle"> <img src="../../assets/images/game-icons_kitchen-tap.svg" alt="" /></section>
        <h4> Renovation </h4>
        <p>We transform old or damaged structures into modern, functional spaces tailored to your needs and style.</p>

      </div>
    </div>
  );
}

export default Servicecard;