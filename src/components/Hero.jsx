import React from "react";
import GetStarted from "./GetStarted";
import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* <img src={robot} alt="robot" className="" /> */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-md mb-2">
        <img src={discount} alt="discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} text-xs ml-2`}>
          <span className="text-white">20%</span> DISCOUNT FOR{" "}
          <span className="text-white">1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white ss:leading-[100px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins font-semibold text-[52px] ss:text-[66pxpx] text-white ss:leading-[100px] leading-[75px]">
        Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute top-0 z-[0] w-[35%] h-[35%] pink__gradient " />
      <div className="absolute bottom-40 z-[1] w-[75%] h-[75%] white__gradient " />
      <div className="absolute right-20 bottom-20 z-[0] w-[45%] h-[45%] blue__gradinet " />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
