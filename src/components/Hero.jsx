import React from "react";
import heroImg from "../assets/hero.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVarients";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-white pt-28 flex items-center md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side  */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 "
        >
          <h1 className="text-3xl font-secondary font-bold  mb-4 md:w-3/5 leading-snug">
            Start your journey to mental wellness
          </h1>
          <p className="mb-12 text-lg md:pr-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptas eligendi accusantium ad distinctio, tempore dolorum ex
            nulla debitis, sunt libero deleniti quibusdam, delectus beatae?
            Officiis totam ab neque necessitatibus?
          </p>
          <button
            href="#contact"
            className="bg-primary font-medium px-8 py-3.5 rounded text-white hover:bg-primary/90"
          >
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <IoIosArrowDroprightCircle />
            </a>
          </button>
        </motion.div>

        {/* right side  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 h-full"
        >
          <img src={heroImg} alt="hero image" className="object-cover w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
