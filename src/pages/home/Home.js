import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import  Candy1  from "./../../assets/images/candy1.jpg";
import Candy2 from "./../../assets/images/candy2.jpg";
import choko from "./../../assets/images/choko.jpg";
import energie from "./../../assets/images/energie.jpg";


// import  Candy1 from "./../../assets/images/candy1.jpg";

export const Home = () => {


  return (
    <>
      <Carousel className="carousel container">
        <div className="pics">
          <img src={choko} alt="Image 1" />
        </div>
        <div className="pics">
          <img src={energie} alt="Image 2" />
        </div>
        <div className="pics">
          <img src={Candy2} alt="Image 3" />
        </div>
      </Carousel>

      <div className="grid">
        <div class="card" >
          <div>
            <img src={choko} alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">CHOKO-FLEX</h5>
            <p className="text-center">
              70 MAD

            </p>
            <a href="#" class=" btn1 btn btn-primary text-center">AJOUTER AU PANIER </a>
          </div>
        </div>
        <div class="card" >
          <div>
            <img src={energie} alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">ENERGIE DRINKS </h5>
            <p className="text-center">
              40 MAD
            </p>
            <a href="#" class="btn1 btn btn-primary text-center">AJOUTER AU PANIER </a>
          </div>
        </div>
        <div class="card" >
          <div>
            <img src={Candy2} alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center"> CANDY BIGGY </h5>
            <p className="text-center">
              12 MAD
            </p>
            <a href="#" class="btn1 btn btn-primary">AJOUTER AU PANIER </a>
          </div>
        </div>


      </div>


      <footer className="fot footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>We are a candy shop dedicated to bringing you the sweetest treats and confections.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Contact</h3>
                        <p>123 Candy Street</p>
                        <p>City, State, ZIP</p>
                        <p>Email: info@candyshop.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">© {new Date().getFullYear()} Candy Shop. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>






    </>
  );
};
