import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVarients";

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        scroll: "smooth",
      });
    }
  };

  const packages = [
    {
      name: "Bronze package",
      price: "$99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum.",
      features: [
        "Access to basic welness ",
        "Weekly mental welness tips",
        "Communite support group ",
      ],
    },
    {
      name: "Silver package",
      price: "$199",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum.",
      features: [
        "Access to basic welness",
        "Weekly mental welness tips",
        "Communite support group ",
      ],
    },
    {
      name: "Gold package",
      price: "$500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum.",
      features: [
        "Access to basic welness",
        "Weekly mental welness tips",
        "Communite support group",
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center  mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Perfect for small & large Brands
          </h2>
          <p className="text-lg mx-auto md:w-2/3 mb-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            architecto facilis adipisci ab maiores, quidem asperiores
            reiciendis,{" "}
          </p>
        </motion.div>

        {/* packages  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:flex-row md:w-5/6 mx-auto gap-8 pb-12"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 felx-1 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <hr className="w-24 border text- border-primary" />
              <p className="text-3xl font-bold mb-4">
                {pkg.price} <span className="text-lg font-normal">/month</span>
              </p>
              <p className="text-lg mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {pkg.features.map((feature, inx) => (
                  <li key={inx}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Get Started
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
