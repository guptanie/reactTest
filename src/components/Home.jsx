import React from "react";
import pic from '../images/HomeImage.jpg';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={(pic)}
              alt="pic"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              We are freelencers with 10 men years of experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;