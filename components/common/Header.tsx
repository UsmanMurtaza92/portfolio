import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link } from "react-scroll";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Hamburger from "../ui/Hamburger";

const Header = () => {

  const router = useRouter();

  const menu = [
    // {
    //   title: 'Home',
    //   link: 'home'
    // },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Experience",
      link: "experience",
    },
    {
      title: "Project",
      link: "project",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const mobileMenu: Variants = {
    onscreen: {
      x: isOpen ? 0 : '100%',
      transition: {
        duration: 0.3,
        delay: 0,
      },
    },
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev)
  } 

  return (
    <header
      className={`${
        show ? "translate-y-0" : "-translate-y-full"
      } tansform fixed top-0 left-0 w-full ${
        lastScrollY > 10 ? "shadow-xl py-4" : "py-6"
      } transition-all duration-300 ease-in-out  backdrop-filter backdrop-blur-md bg-body/80 md:px-16 px-6 z-50`}
    >
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            onClick={() => router.refresh()}
            className="shadow border-2 border-primary text-primary flex justify-center items-center transition-all duration-150 ease-linear cursor-pointer text-xl font-semibold logo-box"
          >
            U
          </motion.div>

          {/* Desktop Menu */}
          <div className="md:flex hidden items-center gap-7">
            {menu.map((nav, index) => (
              <motion.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index / 7 + 0.5 + 0.9 }}
                viewport={{ once: true }}
                key={index}
                className="cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <div className="text-LightestSlate text-[13px] flex items-center group hover:text-primary transition-all duration-150 ease-linear">
                    <span className="heading-num text-primary transition-all duration-150 ease-linear mr-1 text-xs">
                      0{index + 1}.{" "}
                    </span>
                    {nav.title}
                  </div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
            >
              <a href='/files/resume.pdf' download>
                <Button text="Resume" link="/" size="small" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <motion.div onClick={handleToggleMenu} className={`${isOpen ? 'md:hidden block' : 'hidden'} h-screen bg-black/30 w-full fixed top-0 left-0`}></motion.div>
          <motion.div
          initial={{ x: '100%' }}
          whileInView="onscreen"
          variants={mobileMenu} 
          className={`md:hidden flex flex-col justify-center items-center fixed top-0 right-0 h-screen w-72 gap-7 bg-LightNavy`}>
            {menu.map((nav, index) => (
              <motion.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index / 7 + 0.5 + 0.9 }}
                viewport={{ once: true }}
                key={index}
                className="cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={handleToggleMenu}
                >
                  <div className="text-LightestSlate text-[17px] flex items-center group hover:text-primary transition-all duration-150 ease-linear">
                    <span className="heading-num text-primary transition-all duration-150 ease-linear mr-1 text-xs">
                      0{index + 1}.{" "}
                    </span>
                    {nav.title}
                  </div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
              className="mt-3"
            >
              <a href='/files/resume.pdf' download>
                <Button text="Resume" link="/"  />
              </a>
            </motion.div>
          </motion.div>
          
          <Hamburger 
          isOpen={isOpen}
          setIsOpen={handleToggleMenu}
          />
        </div>
    </header>
  );
};

export default Header;
