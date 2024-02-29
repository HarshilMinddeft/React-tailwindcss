import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          {/* {Img} */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* {text} */}
          <div className="flex-1">
            <h2 className="h2 text-accent">About Ironman Mark1.</h2>
            <h3 className="h3 mb-4">
              “SOMETIMES YOU’VE GOTTA RUN BEFORE YOU CAN WALK.”
            </h3>
            <p className="mb-6">
              When ironman was testing his full Iron Man suit for the very first
              time, he doesn’t wait on the data. He doesn’t wait on all the
              calculations and simulations to run. He trusts himself and he
              trusts his tech.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={93} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Number of <br />
                  Suits
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={58.58} duration={3} />
                  ) : null}
                  crores USD
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  All movies <br />
                  Collection
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  $
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  billion
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Net Worth <br />
                  In dollars
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">About</button>
              <a href="#" className="text-gradient btn-link">
                IronMan History
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
