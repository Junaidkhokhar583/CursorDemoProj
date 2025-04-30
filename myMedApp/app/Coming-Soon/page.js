
import Slider from "../components/Slider";
import HeroCard from "../components/HeroCard";
import { RiBox1Fill } from "react-icons/ri";
import DescriptionCard from "../components/DescriptionCard";
import HeroOverlay from "../components/HeroOverlay";
import Header from "../components/Header";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";



export default function ComingSoon() {
   
const hcPoints1=[
    "Conveniently remove unwanted hair with our mobile services.",
    "Effortlessly achieve smooth and hair-free skin with our mobile treatments.",
    "Experience the convenience of laser hair removal at your location."]

const hcPoints2=[
    "Improved Circulation.",
    "Reduced Swelling.",
    "Boosted Immune System."]

return(
    <div className="xsm:w-[189%] sm:w-full">
      <Header/>
        <Slider
        style={{height:"800px"}}
        mainText={[
            "Introducing Our Services",
            "Effortless Hair Removal Services",
            "Smile Brighter with Our Teeth-whitening Service"]}
        subText={[
            "Discover the convenience of HBOT, laser hair removal, lymphatic drainage, and teeth whitening services.",
            "Enjoy Professional Care and Silky-Smooth Skin with Zero Hassle Without Leaving Home-Anytime, Anywhere!",
            "Experience Advanced, Professional-grade Whitening Solutions Designed to Deliver a Radiant Smile That Lasts, All in the Comfort of Your Own Space."]}
        src={[
            "/s2.jpeg","/h1.jpeg","/t2.png"
        ]}
        />
        
<div className="bg-[#f2f7fa]">
        <HeroCard
        bgColor=""
        headText="Effortless Laser Hair Removal Services at Your Doorstep"
        detailsText="Experience the convenience and effectiveness of our mobile laser hair removal services. Our professional team will deliver reliable results wherever you are."
        mainText={["",""]}
        subText={[
            <span className="grid grid-flow-row gap-y-5 w-max">
                {
           hcPoints1.map((hcPoint,index)=>(
               <span key={index}>
                {<RiBox1Fill  className="inline mr-[10px] mb-[3.7px]"/>}
                {hcPoint}
               </span>
                ))}
                </span>
            
            ,""]}
            src={["","/medical.png"]}
        style={{}}
        />

<div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>

      
        <HeroCard
        bgColor=""
        headText="Discover the Benefits of Lymphatic Drainage for Enhanced Wellness"
        detailsText="Lymphatic drainage is a gentle massage technique that helps improve circulation, reduce swelling, and boost the immune system. Experience the rejuvenating effects of this therapy and enhance your overall wellness."
        mainText={["",""]}
        subText={[
            <span className="grid grid-flow-row gap-y-5 w-max">
                {
           hcPoints2.map((hcPoint,index)=>(
               <span key={index}>
                {<RiBox1Fill  className="inline mr-[10px] mb-[3.7px]"/>}
                {hcPoint}
               </span>
                ))}
                </span>
            
            ,""]}
            src={["","/medical.png"]}
        style={{}}
        />
        <HeroCard
        bgColor=""
        headText="Achieve a Brighter Smile with Our Professional Teeth Whitening Service"
        detailsText="Experience the confidence of a whiter smile with our advanced teeth whitening service. Our professional team will deliver effective and reliable results, enhancing your wellness and beauty."
        mainText={["",""]}
        subText={["",""]}
        src={["","/medical.png"]}
        style={{backgroundColor:"white"}}
        />


       <DescriptionCard
        headText="New Services for Your Wellness Journey"
        detailsText="Experience the convenience of our advanced treatments delivered by our professional team. Enhance your wellness and beauty with our state-of-the-art mobile services."
        mainText={[
          "Laser Hair Removal",
          "Lymphatic Drainage",
          "Teeth Whitening",
        ]}
        subText={[
          " Say goodbye to unwanted hair with our laser hair removal service.",
          "Improve your overall well-being with our lymphatic drainage treatment.",
          "Achieve a brighter smile with our professional teeth whitening service.",
        ]}
        src={["/assets/cube.png", "/assets/cube.png", "/assets/cube.png"]}
      />

        <HeroOverlay
        mainText="Stay Updated on New Services"
        subText="Be the first to know when our new laser hair removal, lymphatic drainage, and teeth whitening services become available. Sign up to receive updates and experience the convenience of these advanced treatments at your location."
        src="/Contact1.jpg"
        style={{ height: "1000px" }}
      />
    </div>
    <BaseFooter/>
    <GeneralFooter/>
    </div>
  );
};