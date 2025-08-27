import React from "react";
import Button from "./Button";
function Form() {
    return (
        <div className="form-container">
            <div className="row-left">
                <h3>Our Location</h3>
                <p>123 Main St, Anytown, USA</p>

                <h3>Contact Us</h3>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
            </div>
            <div className="row-right">
                <h3>Request a Quote From Us</h3>
                <form>
                    <input type="text" placeholder="FullName" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone" required />
                    <textarea placeholder="Project Details" required></textarea>
                    <Button label="Send Message" color="#051B34" />
                </form>

            </div>
        </div>

    );
}


export default Form;