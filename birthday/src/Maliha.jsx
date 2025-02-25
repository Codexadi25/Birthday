import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import img1 from "./assets/happy-birthday.gif"
import img2 from "./assets/balloon.gif"
import img3 from "./assets/congratulations-7600_512.gif"
import img4 from "./assets/glitter.gif"

import img5 from "./assets/happy-birthday-food.gif"


const messages = [
  "Happy Birthday, Maliha🎉 Hope you have an amazing year ahead!",
  "Wishing you endless joy and success! Enjoy your day! 🎂",
  "May your special day be filled with laughter and happiness! 🎁",
  "A hardworking teammate like you deserves all the happiness in the world! 🌟",
  "Cheers to another year of greatness! Have a fantastic birthday! 🥳",

];

const images = [
  `${img1}`,
  `${img2}`,
  `${img3}`,
  `${img4}`,
  `${img5}`
];

const Aishwarya = () => {
  const [index, setIndex] = useState(0);

  const nextMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="birthday-container">
      <h1>Happy Birthday</h1>
      <h3>Dear Maliha</h3>
      <motion.img
        key={index}
        src={images[index % images.length]}
        alt="Celebration"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="birthday-gif"
      />
        <p>{messages[index]}</p>
      <motion.div
        key={messages[index]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="message-box"
      >
      </motion.div>
      <button onClick={nextMessage} className="next-button">Next</button>
    </div>
  );
};

export default Aishwarya;
