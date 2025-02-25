import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import img1 from "./assets/happy-birthday.gif"
import img2 from "./assets/balloon.gif"
import img3 from "./assets/congratulations-7600_512.gif"
import img4 from "./assets/glitter.gif"

import img5 from "./assets/happy-birthday-food.gif"


const messages = [
  "Happy Birthday, TL! 🎉 Hope you have an amazing year ahead!",
  "A leader like you deserves all the happiness in the world! 🌟",
  "Happy Birthday to our fearless leader, the one and only Lioness of the email jungle! 🦁",
  "Your ferocity in tackling Average Handling Time, your dedication to top-notch Quality, and your impressive ability to navigate the wilderness of Long PNs always leave us in awe.",
  "You strike the perfect balance between fierce and fabulous, and we're incredibly lucky to have you guiding us through the inbox jungle.",
  "Thank you for always being our brave protector, our guiding star, and our occasional life-saver (especially when we’re drowning in escalations). Your roar of encouragement echoes through our daily tasks, and we couldn’t ask for a more fantastic leader.🎁",
  "May your special day be filled with roaring laughter, wild adventures, and a pride of people who appreciate you as much as we do!🥳",
  "Happy Birthday, Lioness! 🎉🥳With roaring admiration By our Team",

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
      <h3>Dear Arfaniya</h3>
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
