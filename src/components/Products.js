'use client';
import "../styles/Product.modules.css";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const isDisabled = true;
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="product">
      <div className="product__title">
        <h1>Our Products</h1>
      </div>
      <div className="product__btns">
      <a href="#" className={`product__btn ${isDisabled ? 'product__btn--disabled' : ''}`}>
        <Image
          src="/bx-chevron-left.svg"
          className="product__btn-img"
          alt="Previous"
          width={35}
          height={35}
        />
      </a>
      <a href="#" className={`product__btn ${isDisabled ? 'product__btn--disabled' : ''}`}>
        <Image
          src="/bx-chevron-right.svg"
          className="product__btn-img"
          alt="Next"
          width={35}
          height={35}
        />
      </a>
    </div>
      <motion.div
        ref={ref}
        className="product__container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="product__content" variants={itemVariants}>
          <h1 className="product__heading">Carabao Energy Drink Original</h1>
          <p className="product__description">
          Our light and distinctive original energy recipe enjoyed by millions worldwide.

          Carabao Energy Drink Original is a refreshing and great tasting low calorie energy drink. Enjoy our original, distinctive taste in this light and refreshingly carbonated energy drink. Half the sugar of traditional energy drinks and only 63 calories per can. Contains taurine, caffeine and B vitamins which replenishes energy* and relieves fatigue*.           </p>
        </motion.div>
        <motion.div className="column" variants={itemVariants}>
          <motion.div className="product__content-img" variants={itemVariants}>
            <div className="product__img">
              <Image
                src="/drink.png"
                alt="Carabao Energy Drink Original"
                width={300}
                height={300}
              />
            </div>
            <p className="product__name">Carabao Energy Drink</p>
          </motion.div>
          <a href="/carabao" className="product__cta">SHOP NOW</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
