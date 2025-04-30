"use client";

import Button from "../components/Button";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";
import Header from "../components/Header";
import Divider from "../components/Divider";
import { useEffect, useState, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // halt the animation after triggering once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  const tableData = [
    {
      column1: "HBOT Packages",
      column2:
        "Mobile Hyperbaric Oxygen Therapy Treatment Pricing & Packages.",
      column3: "Package per Session as needed.",
    },
    {
      column1: "",
      column2:
        "Single Session. Save more with multiple sessions.",
      column3: "$299",
    },
    {
      column1: "",
      column2:
        "5 Session - sub-total $1445, save $50",
      column3: "$289 per session",
    },
    {
      column1: "",
      column2:
        "10 Session - sub-total $2,790, save $200",
      column3: "$279 per session",
    },
    {
      column1: "",
      column2:
        "15 Session - sub-total $4,035, save $400",
      column3: "$269 per session",
    },
    {
      column1: "",
      column2:
        "20+ Session - sub-total $5,180, save $800",
      column3: "$259 per session",
    },
    {
      column1: "-",
      column2:
        "**All other testing services are listed below",
      column3: "-",
    },
    {
      column1: "Rapid Testing	",
      column2:
        "Antigen Test.<br/>Time may vary depending on circumstances.Result is texted in 15min** then emailed 3-5 hours later.",
      column3: "$29",
    },
    {
      column1: "1 Hour RT-PCR Test for Travel",
      column2:
        "1 hour results includes RT-PCR Document <br/> Requirement for Travel, School, Medical Procedures, and more.",
      column3: "$129",
    },
    {
      column1: "FLU A & B	",
      column2:
        "Influenza A and B are the two types of influenza that cause epidemic seasonal infections nearly every year.<br/> Influenza A can be found in many species, including humans, birds, and pigs. Due to the breadth of potential hosts and its ability to genetically change over a short amount of time.",
      column3: "$79",
    },
    {
      column1: "FLU A & B + Antigen	",
      column2: "This test is used to rapidly detect COVID-19, Influenza A & B	",
      column3: "$129",
    },
    {
      column1: "RSV	",
      column2:
        "Is a respiratory virus with serious effects on children & older adults	",
      column3: "$89",
    },
    {
      column1: "Antibody Test - Rapid 15 minute ",
      column2:
        "Test to see if Covid-19 has been in your system with our Antibody Test!	",
      column3: "$79",
    },
    {
      column1: "Drug 5 Panel & 12 Panel",
      column2:
        "Testing A drug test looks for signs of one or more illegal or prescription drugs in a sample of your urine (pee), blood, saliva (spit), hair, or sweat. The purpose of a drug test is to look for drug use and misuse.	",
      column3: "5P->$99 ,  12P->$149",
    },
    {
      column1: "Allergy	",
      column2:
        "Find what your allergic or hypersensitive to with our allergy test.",
      column3: "Coming Soon",
    },
    {
      column1: "DNA Paternity Testing	",
      column2:
        "DNA tests compare samples of a father and child's genetic code to provide an accurate indicator of paternity.	",
      column3: "Coming Soon",
    },
    {
      column1: "TB",
      column2:
        "The Mantoux tuberculin skin test is a test to check if a person has been infected with TB bacteria.	",
      column3: "Coming Soon",
    },
    {
      column1: "Sexually Transmitted Disease/Infection	",
      column2:
        "Find out if you have been infected with an STD/STI. Testing can help you get the treatment you need and may help prevent the spread of disease.		",
      column3: "Coming Soon",
    },
    {
      column1: "Blood Glucose	",
      column2:
        "A blood glucose test measures the glucose levels in your blood. Glucose is a type of sugar. It is your body's main source of energy.		",
      column3: "Coming Soon",
    },
    {
      column1: "Fecal Testing",
      column2:
        "A fecal occult blood test (FOBT) looks at sample of your stool (poop) to check for blood. Occult blood means that you can't see it with the naked eye.		",
      column3: "Coming Soon",
    },
  ];

  const slides = [
    {
      title: "Vision",
      description:
        "Breaking barriers to healthcare access, we deliver convenience, trust, and care right to your doorstep",
      bgImage: "bg-[url('/Vision.jpg')]",
      bgColor: "bg-[#2c5e8e]",
    },
    {
      title: " ",
      description:
        "We are proud to announce that WeTestU and The Mobile Wellness Group have joined together to collectively become The Mobile Wellness Group",
      bgImage: "bg-[url('/innovation.jpeg')]",
      bgColor: "bg-[#aaa8a4]",
    },
    {
      title: "Services",
      description:
        "Offering Hyperbaric Oxygen therapy, Covid-19, RSV and FLU testing at your doorstep.",
      bgImage: "bg-[url('/Service.jpg')]",
      bgColor: "bg-[#664f8b]",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
  };

  return (
    <div>
      <Header />

      <section className="relative bg-gradient-to-r from-[#020a19] to-[#0a326a] h-[540px] text-white">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center lg:mt-[-30px] xl:mt-0px md:-mt-10 sm:mt-[-45px] xmd:mt-[-20px] exmd:mt-[-45px] xsm:mt-[-45px]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="sm:text-xl lg:text-4xl text-[#8759f3] mb-4 md:text-2xl">
                Who We Are
              </h3>
              <h1 className="exsm:text-[1.22rem] exsm:leading-6 exmd:leading-3 sm:text-2xl md:text-[1.65rem] md:leading-4 lg:text-4xl  xl:text-6xl font-bold mb-4">
                Our Journey: From Legacy to Innovation
              </h1>
              <p className="exsm:text-xs exsm:leading-[1.125rem] md:text-[0.9rem] md:leading-5 lg:text-lg mb-6 exmd:text-sm">
                Welcome to the next chapter of our story. While we honor the
                roots established at{" "}
                <strong className="text-[#12d45d]">"WeTestU.com"</strong>, this
                new platform is designed to focus on innovation and
                patient-centered care, we have rebuilt our foundation to deliver
                enhanced medical services that connect you with the care you
                need, when you need it, and whereever you need it.
              </p>
              <Button
                type="button"
                text="Explore Our Legacy"
                className={
                  "inline-block bg-white !text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
                }
                style={{}}
                onClick={() => {
                  const exploreSection = document.getElementById("explore");
                  exploreSection
                    ? exploreSection.scrollIntoView({ behavior: "smooth" })
                    : "";
                }}
              />
              {/* <a
                onClick={() => {
                  const exploreSection = document.getElementById("explore");
                  if (exploreSection) {
                    exploreSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                href="#explore"
                className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg 
             hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
              >
                Explore Our Legacy
              </a> */}
            </div>

            {/* Right Visual */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative justify-items-center">
                <img
                  ref={imgRef}
                  src="/about-us-bg.png" //  image
                  alt="Legacy Journey"
                  className={`lg:max-w-full md:max-w-[60%] sm:max-w-[70%] xmd:max-w-[75%] exmd:max-w-[95%] xsm:max-w-[110%] -mt-4 ${
                    isVisible
                      ? "animate-fade-left animate-ease-in animate-duration-[1500ms]"
                      : "opacity-0"
                  }`}
                />

                {/* {border styling around img} */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center w-[40%] border-[#e38373] border border-solid justify-self-center rounded-full">
                  Since <span className="text-teal-300">2010</span>
              </div> */}
              </div>
            </div>
          </div>
          <div id="explore"></div>
        </div>
      </section>

      <section className="mt-4">
        <div
          className="container xsm:hidden lg:block lg:mt-[55rem] lg:pr-[48.25rem] xl:mt-[43rem] xl:pr-[60.25rem] 2xl:pr-[74.25rem]
         absolute -z-10"
        >
          <img src="/leftGrid.png"></img>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Left Content */}
            <div className="text-left lg:w-1/2 flex flex-col justify-between gap-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-sans">
                We embrace every challenge with dedication and expertise.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl">
                Our team of mobile specialists is equipped to provide top-notch
                services, including COVID-19, FLU A & B, RSV as well as 5-panel & 12-panel drug testing. We are also proud
                to announce the launch of three mobile units dedicated to
                Hyperbaric Oxygen Therapy Chambers. Every service we offer is
                designed to be reliable, accessible, and focused on prioritizing
                your health and well-being.
              </p>
              <span className="flex gap-5 items-start">
                <Divider
                  className="w-2 xsm:h-56 exmd:h-[10.6rem] xmd:h-28 md:h-[5.5rem] lg:h-full rounded-[0.85px]"
                  style={{
                    backgroundColor: "#2b9be1",
                    boxShadow: "4px 0px 10px 0.5px rgb(5 241 197 / 62%)",
                  }}
                />
                <p className="text-lg sm:text-xl lg:text-2xl font-sans">
                  At <strong className="text-[#115b71]">TMWG</strong>, we
                  believe in collaboration and care, pure and simple. Your
                  health becomes our priority. Your concerns become our
                  opportunities to provide exceptional service. Together, we
                  ensure better outcomes for your well-being.
                </p>
              </span>
            </div>

            {/* Right Visual */}
            <div
              className="lg:w-1/2 xl:h-[35rem] xsm:justify-items-start w-full grid grid-flow-row px-12 py-4 sm:py-8 sm:px-8 
            items-center bg-gradient-to-r from-[#020a19] to-[#0a326a] text-white"
            >
              {/* Block 1 */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 pb-6 ">
                <div className="flex justify-center items-center relative xsm:hidden lg:flex  ">
                  {/* <img
                    src="/assets/icon-border.png"
                    className=" scale-125 sm:scale-150"
                    alt="icon-border"
                  /> */}
                  <div className=" rounded-full bg-gradient-to-tr from-[#ac00db] via-[#979f5c] to-[#144ae1] p-1">
                    <img
                      src="/assets/HBOT-icon2.png"
                      className="p-1 bg-transparent bg-gradient-to-r from-[#020a19] to-[#0a326a] rounded-full "
                      alt="HBOT-icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Advanced Health Therapies
                  </h3>
                  <a
                    href="/HBOT"
                    className="text-sm sm:text-lg flex gap-1 text-[#258fb1]"
                  >
                    Explore HBOT Services{" "}
                    <FaArrowRightLong className="self-center text-end" />
                  </a>
                </div>
              </div>
              <Divider
                className="w-full h-[2px] sm:h-[3px] rounded-b-[0.85px]"
                style={{ backgroundColor: "#2b3840" }}
              />

              {/* Block 2 */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 py-6">
                <div className="flex justify-center items-center relative xsm:hidden lg:flex  ">
                  {/* <img
                    src="/assets/icon-border.png"
                    className="scale-125 sm:scale-150 "
                    alt="icon-border"
                  /> */}
                  <div className=" rounded-full bg-gradient-to-tr from-[#ac00db] via-[#979f5c] to-[#144ae1] p-1">
                    <img
                      src="/assets/blood-test.png"
                      className="p-1 bg-transparent bg-gradient-to-r from-[#020a19] to-[#0a326a] rounded-full "
                      alt="HBOT-icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Comprehensive Diagnostic Testing
                  </h3>
                  <a
                    href="/Services"
                    className="text-sm sm:text-lg flex gap-1 text-[#258fb1]"
                  >
                    View RSV, FLU A & B Testing Services{" "}
                    <FaArrowRightLong className="self-center text-end" />
                  </a>
                </div>
              </div>
              <Divider
                className="w-full h-[2px] sm:h-[3px] rounded-b-[0.85px]"
                style={{ backgroundColor: "#2b3840" }}
              />

              {/* Block 3 */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 py-6">
                <div className="flex justify-center items-center relative xsm:hidden lg:flex  ">
                  {/* <img
                    src="/assets/icon-border.png"
                    className="scale-125 sm:scale-150 "
                    alt="icon-border"
                  /> */}
                  <div className=" rounded-full bg-gradient-to-tr from-[#ac00db] via-[#979f5c] to-[#144ae1] p-1">
                    <img
                      src="/assets/med-blog.png"
                      className="p-1 bg-transparent bg-gradient-to-r from-[#020a19] to-[#0a326a] rounded-full "
                      alt="HBOT-icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Health Insights & Resources
                  </h3>
                  <a
                    href="/blog"
                    className="text-sm sm:text-lg flex gap-1 text-[#258fb1]"
                  >
                    Read Our Health Blogs{" "}
                    <FaArrowRightLong className="self-center text-end" />
                  </a>
                </div>
              </div>
              <Divider
                className="w-full h-[2px] sm:h-[3px] rounded-b-[0.85px]"
                style={{ backgroundColor: "#2b3840" }}
              />

              {/* Block 4 */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 pt-6">
                <div className="flex justify-center items-center relative xsm:hidden lg:flex  ">
                  {/* <img
                    src="/assets/icon-border.png"
                    className="scale-125 sm:scale-150 "
                    alt="icon-border"
                  /> */}
                  <div className=" rounded-full bg-gradient-to-tr from-[#ac00db] via-[#979f5c] to-[#144ae1] p-1">
                    <img
                      src="/assets/Med-service.png"
                      className="p-1 bg-transparent bg-gradient-to-r from-[#020a19] to-[#0a326a] rounded-full "
                      alt="HBOT-icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    On-Demand Mobile Care
                  </h3>
                  <a
                    href="#"
                    className="text-sm sm:text-lg flex gap-1 text-[#258fb1]"
                  >
                    Experience Rapid Services at Your Doorstep{" "}
                    <FaArrowRightLong className="self-center " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="grid grid-flow-row xsm:px-4 sm:px-40 py-7 sm:py-4 lg:flex justify-center gap-8 sm:gap-12">
          <div className="grid-flow-row grid justify-items-center lg:w-[25%] 2xl:w-full">
            <img
              src="/testimonial.png"
              className="border-2 solid border-teal-700 rounded-full p-4"
            />
            <div className=" justify-items-center grid grid-flow-row w-full">
              <h2 className="font-sans text-center font-semibold text-lg md:text-2xl">
                Rated by you, driven by excellence
              </h2>
              <p className="text-center break-words w-full overflow-hidden md:text-lg">
                Over 600 reviews with a 5 star average!
              </p>
            </div>
          </div>
          <div className="grid-flow-row grid justify-items-center lg:w-[25%] 2xl:w-full">
            <img
              src="/Location.png"
              className="border-2 solid border-teal-700 rounded-full p-4"
            />
            <div className=" w-full justify-items-center grid grid-flow-row">
              <h2 className="font-sans text-center font-semibold text-lg md:text-2xl">
                Accessible care
              </h2>
              <p className="text-center break-words w-full overflow-hidden md:text-lg">
                San Diego, Los Angeles & Inland Empire. Available 7 days a week,
                book your appointment or call us! <strong>8am - 8pm</strong> !
                Call or Text at{" "}
                <small className="underline font-bold hover:text-[#1200ff]">
                  619-799-5598
                </small>
              </p>
            </div>
          </div>
          <div id="service-table" className="grid-flow-row grid justify-items-center lg:w-[25%] 2xl:w-full ">
            <img
              src="/Available.png"
              className="border-2 solid border-teal-700 rounded-full p-4"
            />
            <div className=" w-full justify-items-center grid grid-flow-row">
              <h2 className="font-sans text-center font-semibold text-lg md:text-2xl">
                Always here, always caring
              </h2>
              <p className="text-center break-words  w-full overflow-hidden md:text-lg">
                Let us come to U, anytime you need us!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div  className="mt-48">
        <section className="px-4 md:px-12 lg:px-20 xl:px-[22rem]">
          <div className="border border-gray-400 shadow-lg text-left rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="text-lg">
                <tr className="bg-[#2e6b63] text-white border-b border-b-slate-100">
                  <th className="px-4 py-2">Service/Treatments</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-[#2e6b63] hover:text-white ${
                      index % 2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-2 border-r border-r-slate-700 hover:border-r-slate-100">
                      {row.column1}
                    </td>
                    <td
                      className="px-4 py-2 border-r border-r-slate-700 hover:border-r-slate-100"
                      dangerouslySetInnerHTML={{ __html: row.column2 }}
                    ></td>
                    <td className="px-4 py-2">{row.column3}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#2e6b63] text-white border-t border-t-slate-100">
                  <td colSpan="3" className="px-4 py-2 text-center">
                  All Hyperbaric Treatments have trip charges included!<br/>
                  **Other services are $39 for mobile testing. Or you can make an appointment for a curbside test outside our office.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>

      <div className="mt-36"></div>
      <div className="w-full  h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${slide.bgImage} flex items-center justify-center bg-cover h-[150px] md:h-[250px] lg:h-[350px]  bg-center`}
            >
              <div className="w-full h-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div
                  className={`text-center text-white p-4 md:p-8 ${slide.bgColor}/20 rounded-lg shadow-lg backdrop-blur-md`}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 md:mt-4 text-base md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-36 xl:px-96 lg:px-72 md:px-48 xmd:px-32 exsm:px-14">
        <div className="rounded bg-gradient-to-r from-[#020a19] to-[#0a326a] text-white py-5 px-10 text-left grid content-center">
          <h3 className="font-sans font-semibold text-base lg:text-xl xl:text-4xl">
            Contact Us
          </h3>
          <p className="mt-2 md:mt-4 text-sm lg:text-base xl:text-xl">
            We are dedicated to delivering tangible health outcomes and
            improving patient care.
          </p>
          <div
            className="bg-black text-white shadow-md shadow-[#546c73] hover:bg-white hover:text-black lg:text-xl xl:text-2xl md:text-lg text-sm mt-4
             px-3 py-3 rounded-sm w-fit place-self-end xmd:-mr-28 -mr-16 flex flex-row items-center gap-1"
          >
            <a href="/Contact-Us">Request Services </a>
            <FaArrowRightLong></FaArrowRightLong>
          </div>
        </div>
      </div>

      <div className="mt-16"></div>
      <BaseFooter />
      <GeneralFooter />
    </div>
  );
}
