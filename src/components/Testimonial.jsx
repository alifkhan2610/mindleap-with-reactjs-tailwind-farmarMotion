import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVarients";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      location: "New York, NY",
      review:
        "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
      image: review1,
    },
    {
      name: "John Smith",
      location: "Los Angeles, CA",
      review:
        "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
      image: review2,
    },
  ];

  return (
    <div id="testimonial" className="bg-[#f7f8fc] p-12">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="text-center  mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg mx-auto md:w-1/2 mb-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            architecto facilis adipisci ab maiores, quidem asperiores
            reiciendis.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-12 gap-8 md:w-4/5 mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt="review image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
