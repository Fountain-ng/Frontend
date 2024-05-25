import React from "react";
import "../styles/Services.modules.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__container-1">
          <div className="services__container-1-1">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-1-img"
              width={80}
              height={60}
            />
            <h2 className="services__title">ABOUT US</h2>
          </div>
          <h1 className="services__container-1-description">What are we <br></br> about?</h1>
          <p className="services__container-1-text">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
          <a href="#footer" className="services__container-1-cta">Learn More
          <img
            src="/bx-right-arrow-alt.svg"
            className="services__container-1-cta-img"
            alt="right arrow"
            width={20}
            height={20}
          />
          </a>
        </div>
        <div className="services__container-2">
          <img 
            src="/01.png"
            alt="Fountain Beverages"
            className="services__container-2-img"
            width={400}
            height={500}
          />
        </div>
        <div className="services__container-3">
          <img
            src="/man.png"
            alt="Love for Nature"
            className="services__container-3-img"
            width={400}
            height={500}
          />
        </div>
        <div className="services__container-4">
          <div className="services__container-4-4">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-4-img"
              width={80}
              height={80}
            />
            <h2 className="services__title">OUR SERVICES</h2>
          </div>
          <h1 className="services__container-1-description">What we offer?</h1>
          <p className="services__container-1-text">Lorem ipsum dolor sit amet consectetur. Mi luctus egestas nibh ut turpis ante nunc. Interdum gravida eleifend gravida molestie amet faucibus. Nunc eget duis faucibus neque. Varius amet faucibus sed volutpat imperdiet leo in at ornare.</p>
          <a href="#footer" className="services__container-1-cta">Read More
          <img
            src="/bx-right-arrow-alt.svg"
            className="services__container-1-cta-img"
            alt="right arrow"
            width={25}
            height={25}
          />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;