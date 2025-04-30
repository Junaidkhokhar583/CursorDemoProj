import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa";
import "/styles/webkit.css";

const Hero = ({
  colorDeep,
  openText,
  mainText,
  shadow,
  mobileShadow,
  subText,
  img,
}) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex lg:flex-row lg:items-center z-10 relative overflow-hidden md:px-16 flex-col items-start px-4">
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center w-full items-center text-center mb-5 lg:items-start lg:text-left md:mb-0">
        <h1 className="md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-black">
          <span dangerouslySetInnerHTML={{__html:openText}}></span>{" "}
          <span style={{ color: colorDeep }}>
            <br />
            {mainText}
          </span>
        </h1>
        <p className="leading-normal text-lg md:text-2xl text-black">
          {subText}
        </p>

        <div className="w-2/3 webtxtalign ">
          <Button
            type="button" //  type attribute
            text="Get Started"
            className="text-xl mt-8 font-bold py-4 rounded-full px-9 focus:outline-none md:w-2/5 lg:w-[60%] 2xl:w-2/3"
            style={{
              backgroundColor: colorDeep,
              boxShadow: isDesktop ? shadow : mobileShadow,
            }}
            onClick={() => {
              const getStarted = document.getElementById("getStarted");
              if (getStarted) {
                getStarted.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          <FaArrowDown
            className="mt-[-15px] z-50 animate-bounce text-white"
            size={13}
          />
        </div>
      </div>
      <div className=" w-full lg:-mt-6 relative ">
        <img
          src={img}
          loading="eager"
          alt="Hero Image"
          className="mx-auto object-cover" //  it covers the box properly
          style={{
            width: "auto", // Fixed width
            height: "747px", // (adjust to match images)
          }}
        />
          <div id="getStarted"></div> 
      </div>
    </main>
  );
};

export default Hero;
