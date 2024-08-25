import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVarients";

const WorkingStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-image">
      <div className="absolute inset-0 bg-heroBg bg-opacity-90"></div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4"
      >
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis dolores aut ea magnam reiciendis commodi asperiores
            tenetur et molestiae.
          </p>
        </div>
        <div className="flex felx-col md:flex-row gap-8 md:w-4/5 mx-auto">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full items-center justify-center flex">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a form</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi placeat fuga magnam a eveniet sunt repudiandae amet
              officiis voluptas!
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full items-center justify-center flex">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Get matched</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi placeat fuga magnam a eveniet sunt repudiandae amet
              officiis voluptas!
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full items-center justify-center flex">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Schedule</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi placeat fuga magnam a eveniet sunt repudiandae amet
              officiis voluptas!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingStep;
