import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const section = ["home", "services", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;
    section.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 md:space-x-4 sm:space-x-2 spcae-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          href="#services"
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
          href="#pricing"
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
          href="#testimonial"
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>

        {/* navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>
        {/* button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo("contact");
            }}
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded "
          >
            Contact us
          </a>
        </div>
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <CiMenuFries className="size-6" />
          </button>
        </div>
      </div>
      <div>
        {/* mobile nav item  */}
        {isOpen && (
          <nav className="absolute top-full w-full left-0 bg-heroBg z-20 md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.props.children}
              <li className="py-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo("contact");
                  }}
                  className="text-white bg-primary px-4 py-2 rounded"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
