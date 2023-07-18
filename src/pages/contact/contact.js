import React from "react";
import c1 from "./../../assets/images/c1.jpg";
import c2 from "./../../assets/images/c2.jpg";
import c3 from "./../../assets/images/c3.jpg";
import c4 from "./../../assets/images/c4.jpg";
import { useState } from 'react';




export const Contact = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Fonction pour ajouter un produit au panier
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const openModal = () => {
        setShowModal(true)
      }

    // Fonction pour fermer la modal
    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <>
            {/* Le reste du contenu de votre composant About */}

            {/* Modal du panier */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Panier</h2>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>{"Candy "} - {item.price}53 MAD</li>

                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {/* !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <div className="bt-panier">
                <button className="panier" onClick={openModal}>Panier ({cartItems.length})</button>
                <div class="🤚">
                    <div class="👉"></div>
                    <div class="👉"></div>
                    <div class="👉"></div>
                    <div class="👉"></div>
                    <div class="🌴"></div>
                    <div class="👍"></div>
                </div>
            </div>

            <div className="grid mt-3">
                <div class="card" >
                    <div>
                        <img src={c1} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY</h5>
                        <p className="text-center">
                            70 MAD

                        </p>
                        <a href="#" class=" btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c2} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">CANDY</h5>
                        <p className="text-center">
                            40 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c3} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY </h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c4} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY </h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>


            </div>


            <div className="grid mt-3">
                <div class="card" >
                    <div>
                        <img src={c4} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">CANDY</h5>
                        <p className="text-center">
                            70 MAD

                        </p>
                        <a href="#" class=" btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c3} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">CANDY</h5>
                        <p className="text-center">
                            40 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c2} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY </h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c1} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY </h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>


            </div>
            <div className="grid mt-3">
                <div class="card" >
                    <div>
                        <img src={c3} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY</h5>
                        <p className="text-center">
                            70 MAD

                        </p>
                        <a href="#" class=" btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c1} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY</h5>
                        <p className="text-center">
                            40 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary text-center" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c4} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY</h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
                    </div>
                </div>
                <div class="card" >
                    <div>
                        <img src={c2} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> CANDY </h5>
                        <p className="text-center">
                            12 MAD
                        </p>
                        <a href="#" class="btn1 btn btn-primary" onClick={() => addToCart("product")}>AJOUTER AU PANIER </a>
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