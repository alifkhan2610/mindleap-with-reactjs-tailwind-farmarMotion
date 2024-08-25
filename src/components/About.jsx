import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { IoIosPlayCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVarients";

const About = () => {
  const [isVideoPlaying, setIsvideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsvideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsvideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pt-20 pb-16">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="py-12 px-8 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          {/* left side  */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnailImg}
                  alt=""
                  className="object-cover w-full md:w-[446px] h-auto rounded-lg"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary cursor-pointer rounded-full shadow-lg p-0.5"
                >
                  <IoIosPlayCircle className="size-16 text-white" />
                </button>
              </div>
            ) : null}
          </div>
          {/* right side  */}
          <div className="md:w-1/2 w-full">
            <div className="">
              <h1 className="text-3xl capitalize font-secondary font-bold  mb-4 leading-snug">
                Indevidual Consult and Therapy
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
            </div>
          </div>
        </motion.div>
        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bjYjj0dzRfs?si=jauCXfp_fYvGnPAp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
