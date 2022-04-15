import React from 'react';
import bg from '../assets/images/bg.jpg';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
const Home = () => {
  const name = localStorage.getItem('name');
  return (
    <>
      <Header />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src={bg} className="card-img" alt="background" />
          <div className="card-img-overlay d-flex  justify-content-center">
            <div className="container">
              <h5 className="card-title display-4 fw-bolder text-black">
                Hi {name}....
              </h5>
              <p className="card-text text-black">CHECK OUT THE NEW TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
