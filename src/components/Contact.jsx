
import React from "react";
import contact from '../images/contact.jpg';

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={(contact)}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
             Want to know more about them : Call 8793713703 
            </p>
            <a href="https://www.linkedin.com/in/niket-gupta-61992b47/" target="_blank">Visit LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;