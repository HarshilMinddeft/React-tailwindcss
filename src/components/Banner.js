import React from "react";
import Image from "../assets/avatar.svg";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaTwitch,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[100vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {Text} */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Stark<span>Wane</span>
            </motion.h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  uppercase leading-[1]">
              <span className="mr-4">I am </span>
              <TypeAnimation
                sequence={[
                  "IronMan",
                  3000,
                  "BusinessMan",
                  2000,
                  "Master Engineer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wapper="span"
                repeat={Infinity}
              />
            </div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              “UNITED? UNITY ISN’T ABOUT BEING THE SAME. IT’S ABOUT WORKING
              TOGETHER. WHAT YOU CAN’T CALCULATE, ULTRON, IS THAT OUR
              DIFFERENCES ARE OUR GREATEST STRENGTH.”
            </motion.p>
            <div
              className="flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Projects
              </a>
            </div>
            <div>
              {/* {socialmedia} */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
          {/* {image} */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
