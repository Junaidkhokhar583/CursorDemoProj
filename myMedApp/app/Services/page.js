"use client"
import HeroOverlay from "../components/HeroOverlay";
import DescriptionCard from "../components/DescriptionCard";
import Button from "../components/Button";
import HeroCard from "../components/HeroCard";
import Header from "../components/Header";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";

export default function Services() {
  return (
    <div className="xsm:w-[130%] exmd:w-full">
      <Header />
      <HeroOverlay
        mainText="Mobile Testing Solutions"
        subText="Welcome to The Mobile Wellness Group, your trusted provider of comprehensive mobile testing services for businesses and organizations. Our convenient and reliable solutions bring advanced medical testing directly to your doorstep, ensuring the health and safety of your employees and customers. With our state-of-the-art technology and experienced professionals, we offer a wide range of testing services, including COVID-19, drug, FLU, RSV, and more. Choose The Mobile Wellness Group for efficient and accurate testing solutions that meet your organization's needs"
        src="/Services1.jpg"
        style={{ height: "1000px" }}
        visibility="hidden"
      />
      <div>
        <DescriptionCard
          headText="Comprehensive Testing Services"
          detailsText="At The Mobile Wellness Group,we offer a range of testing services to meet your health needs"
          mainText={[
            "Covid-19 Testing",
            "Mobile Drug Testing",
            "RSV and FLU A & B Testing",
          ]}
          subText={[
            "Stay safe and informed with our on-site Covid-19 Testing Services",
            "Ensure a drug-free environment with our mobile drug testing services",
            "Detect respiratory infections with our RSV and FLU A & B testing",
          ]}
          src={["/assets/3.png", "/assets/1.png", "/assets/2.png"]}
        />
        <div className="flex justify-center pb-6 z-10 relative">
          <a href="/Contact-Us">
            <Button
              type="button"
              text="Sign-Up"
              className="rounded-[4px] "
              style={{
                backgroundColor: "black",
                color: "white",
                height: "38px",
                width: "102px",
              }}
              onClick={()=>{}}
            />
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col  ">
        <div className="divider mt-[50px] bg-[#162c2c] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>

      <HeroCard
        bgColor=""
        headText="Choose The Mobile Wellness Group for Mobile Testing"
        detailsText="Experience the convenience, confidentiality, and reliability of mobile testing services provided by The Mobile Wellness Group. Our team of experienced professionals brings advanced medical testing directly to your doorstep, ensuring you can access the care you need with ease and peace of mind."
        mainText={["Convenience", "Confidentiality"]}
        subText={[
          "Save time and effort by having medical testing done in the comfort of your own home.",
          "Ensure your privacy with our discreet and confidential mobile testing services.",
        ]}
        src={[null, "/medical.png"]}
        style={{}}
      />

      <HeroOverlay
        mainText="Contact Us for Testing Services"
        subText="At The Mobile Wellness Group, we are committed to providing top-quality mobile testing services. Our mission is to bring convenient and reliable healthcare solutions directly to you."
        src="/Contact1.jpg"
        style={{ height: "1000px" }}
      />

      <BaseFooter />
      <GeneralFooter />
    </div>
  );
}
