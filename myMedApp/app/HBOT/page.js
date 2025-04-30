"use client";


import HeroOverlay from "../components/HeroOverlay";

import Divider from "../components/Divider";

import HeroCard from "../components/HeroCard";
import { RiBox1Fill } from "react-icons/ri";
import DescriptionCard from "../components/DescriptionCard";
import Header from "../components/Header";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";

export default function HBOT() {
  const isInView = useInView(0.1);

  const points = [
    <span>
      <b>Anti-aging</b>: Rejuvenate Your Skin and Reduce Signs of Aging.
    </span>,
    <span>
      <b>Sports Injuries</b>: Enhance Performance and Speed Up Recovery.
    </span>,
    <span>
      <b>Autism</b>: Explore the Potential Benefits for Autism Spectrum
      Disorders.
    </span>,
  ];

  const pointsTwo = [
    <span>Accelerate Recovery from Injuries</span>,
    <span>Reduce Inflammation and Swelling</span>,
    <span>Enhance Endurance and Performance</span>,
  ];

  return (
    <div className="xsm:w-[179%] xmd:w-full">
      
<Header/>
      <HeroOverlay
        mainText="Discover HBOT Benefits"
        subText="Experience the amazing health benefits of Hyperbaric Oxygen Therapy (HBOT). Flood your tissues with beneficial oxygen, revitalizing your cells and promoting overall wellness."
        src="/HBOT/heroHeader.jpg"
        style={{ height: "1200px" }}
      />

      <Divider
        className="w-full h-[3px] rounded-b-[0.85px]"
        style={{
          backgroundColor: "#2b3840",
          boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.7)",
        }}
      />

      <HeroCard
        bgColor=""
        headText="Unlock Your Potential with Hyperbaric Oxygen Therapy"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) is a revolutionary treatment that floods your tissues with highly concentrated oxygen, revitalizing your cells and unlocking a wide range of health benefits. FDA-approved for 13 different conditions and counting, HBOT has shown remarkable effectiveness in treating various health issues."
        mainText={["Experience Relief", "Unlock Potential"]}
        subText={[
          "Find relief from aging, sports injuries, autism, detox, asthma, and more with HBOT.",
          "Discover the potential of HBOT for enhanced performance, fertility, and jet lag relief.",
        ]}
        src={[null,"/HBOT/heroCard.jpg"]}
        style={{}}
      />

      {/* {Divider-2 code line}
      <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div> */}

      <HeroCard
        bgColor=""
        headText="Experience the Healing Power of HBOT"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) is a revolutionary treatment that allows you to breathe highly concentrated oxygen while lying in a pressurized chamber. This floods your tissues with beneficial oxygen, revitalizing your cells and promoting healing."
        mainText={["FDA-Approved", "Transform Lives"]}
        subText={[
          "HBOT is FDA-approved for 13 different conditions and counting, making it a highly effective therapy.",
          "Research shows that HBOT can effectively treat a wide range of conditions.",
        ]}
        src={[null,"/HBOT/heroCard3.jpg"]}
        style={{ backgroundColor: "#e9f5ff" }}
      />

      {/* {Divider-2 code line} */}
      {/* <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div> */}

      <HeroCard
        bgColor=""
        headText="Experience the Healing Power of Hyperbaric Oxygen Therapy"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) is a cutting-edge treatment that allows you to breathe highly concentrated oxygen while lying in a pressurized chamber. This floods your tissues with beneficial oxygen, revitalizing your cells and promoting healing."
        mainText={["", ""]}
        subText={[
          <span className="grid grid-flow-row gap-y-5 w-max">
            {points.map((point, index) => (
              <span key={index}>
                {<RiBox1Fill className="inline mr-[10px] mb-[3.7px]" />}
                {point}
              </span>
            ))}
          </span>,
          "",
        ]}
        src={[null,"/HBOT/heroCard2.jpg"]}
        style={{ backgroundColor: "#e0e4e763" }}
      />
      {/* {Divider-2 code line} */}
      {/* <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
        </div> */}

      <DescriptionCard
        headText=""
        detailsText=""
        mainText={[
          "Revitalize Your Cells with HBOT Treatment",
          "Enhance Your Performance with HBOT",
          "Improve Your Well-being with HBOT",
        ]}
        subText={[
          " Hyperbaric Oxygen Therapy (HBOT) is a unique and effective treatment that floods your tissues with beneficial oxygen, promoting healing and revitalizing cells. It has been FDA-approved for 13 different conditions, and research shows its effectiveness in treating a wide range of health issues.",
          "Whether you're an athlete looking to improve your performance or someone seeking anti-aging solutions, Hyperbaric Oxygen Therapy can help. It has shown positive results in treating conditions such as sports injuries, autism, detoxification, asthma, and more.",
          "Hyperbaric Oxygen Therapy offers a wide range of benefits, from improving fertility to reducing the signs of aging. Our state-of-the-art hyperbaric chambers and experienced professionals ensure that you receive top-quality care and achieve your health goals.",
        ]}
        src={["/assets/cube.png", "/assets/cube.png", "/assets/cube.png"]}
      />
      {/* {Divider-2 code line} */}
      {/* <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div> */}
      {/* <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div> */}

      <HeroCard
        headText="Experience the Power of Hyperbaric Oxygen Therapy for Anti-Aging"
        detailsText="Discover the rejuvenating benefits of Hyperbaric Oxygen Therapy (HBOT) in combating the aging process. HBOT increases oxygen levels, improves circulation, reduces inflammation, stimulates collagen production, and accelerates healing."
        mainText={["", ""]}
        subText={["", ""]}
        src={[null,"/HBOT/heroCard6.jpg"]}
        style={{ backgroundImage: `url("/abstract1.jpg")` }}
      />

      <HeroCard
        headText="Accelerate Healing and Enhance Recovery with HBOT"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) treatment allows you to breathe highly concentrated oxygen while lying in a pressurized chamber. This floods your tissues with beneficial oxygen, revitalizing your cells and providing amazing health benefits."
        mainText={["Benefits:", "Research:"]}
        subText={[
          "Accelerated Healing,Reduced Swelling and Bruising,Pain Management,Improved Scar Healing,Anti-Bacterial Effects",
          "Studies show faster healing times, reduced swelling, and better overall satisfaction with surgical results.",
        ]}
        src={[null,"/HBOT/heroCard5.jpg"]}
        style={{}}
      />
      {/* {Divider-2 code line} */}
      <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>
      <HeroCard
        headText="Enhance Recovery and Boost Performance with HBOT"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) is a powerful treatment that accelerates healing, reduces inflammation, and improves athletic performance. Discover the benefits of HBOT for sports injuries and performance enhancement."
        mainText={["", ""]}
        subText={[
          <span className="grid grid-flow-row gap-y-5 w-max">
            {pointsTwo.map((point, index) => (
              <span key={index}>
                {<RiBox1Fill className="inline mr-[10px] mb-[3.7px]" />}
                {point}
              </span>
            ))}
          </span>,
          "",
        ]}
        src={[null,"/HBOT/heroCard4.jpg"]}
        style={{}}
      />

      <HeroCard
        headText="Discover the Benefits of Hyperbaric Oxygen Therapy for Asthma and Allergies"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) is a promising complementary treatment option that can provide relief for those suffering from asthma and allergies. By reducing inflammation, improving oxygenation, enhancing the immune response, and promoting tissue healing, HBOT offers significant benefits for managing these conditions."
        mainText={["Reduced Inflammation:", "Improved Oxygenation:"]}
        subText={[
          "HBOT's anti-inflammatory properties can help reduce inflammation, making it easier to breathe and reducing asthma attacks.",
          "HBOT increases oxygen delivery,alleviating symptoms and improving lung function for asthma sufferers.",
        ]}
        src={[null,"/HBOT/hbot.jpg"]}
        style={{ backgroundImage: `url("/abstract2.jpg")` }}
      />
      {/* {Divider-2 code line} */}
      <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>
      <HeroCard
        headText="Discover the Power of Hyperbaric Oxygen Therapy for Detoxification and Rehabilitation"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) treatment allows you to breathe highly concentrated oxygen while lying in a pressurized chamber. It floods your tissues with beneficial oxygen, revitalizing cells and providing amazing health benefits."
        mainText={["Detoxify & Rejuvenate", "Rehabilitation Support"]}
        subText={[
          "Counteract the damage caused by toxins and harmful habits, and restore your vitality.",
          "Enhance your overall health and wellness with the power of Hyperbaric Oxygen Therapy.",
        ]}
        src={[null,"/HBOT/hbot2.jpg"]}
        style={{}}
      />

      <HeroCard
        headText="Hyperbaric Oxygen Therapy: A Promising Treatment for Autism and Cerebral Palsy"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) has shown great promise in treating autism and cerebral palsy. Research suggests that HBOT can increase blood flow to the brain, delivering more oxygen to areas that might be deficient."
        mainText={["", ""]}
        subText={["", ""]}
        src={[null,"/HBOT/heroCard7.jpg"]}
        style={{ backgroundColor: "#4ebbb017" }}
      />

      <HeroCard
        headText="Recover Faster with Hyperbaric Oxygen Therapy"
        detailsText="Experience the amazing health benefits of Hyperbaric Oxygen Therapy (HBOT). This FDA-approved treatment floods your tissues with beneficial oxygen, revitalizing cells and promoting overall wellness."
        mainText={["Enhanced Recovery", "Boosted Immunity"]}
        subText={[
          "Combat fatigue and adjust to new time zones with enhanced oxygenation and improved circulation.",
          "Strengthen your immune system and reduce inflammation for a healthier travel experience.",
        ]}
        src={[null,"/HBOT/hbot3.png"]}
        style={{}}
      />
      {/* {Divider-2 code line} */}
      <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>
      <HeroCard
        headText="Enhance Fertility with Hyperbaric Oxygen Therapy"
        detailsText="Discover how Hyperbaric Oxygen Therapy (HBOT) can improve fertility by enhancing overall health and optimizing conditions for conception."
        mainText={["Benefits:", "Research:"]}
        subText={[
          "Enhanced blood flow and oxygenation, reduced inflammation, improved egg and sperm quality, enhanced immune function, stress reduction.",
          "While research is still emerging, HBOT shows potential in improving fertility outcomes.",
        ]}
        src={[null,"/HBOT/heroCard4.jpg"]}
        style={{}}
      />
      {/* {Divider-2 code line} */}
      <div className="flex w-full flex-col  ">
        <div className="divider divider-info my-[-3px] bg-[#2f4f4f] shadow-divider h-[1.5px] mx-[16rem] rounded-md"></div>
      </div>
      <HeroCard
        headText="Revitalize Your Health with Hyperbaric Oxygen Therapy (HBOT)"
        detailsText="Hyperbaric Oxygen Therapy (HBOT) treatment allows you to breathe highly concentrated oxygen while lying in a pressurized chamber. This floods your tissues with beneficial oxygen, revitalizing your cells and providing amazing health benefits."
        mainText={["Conditions Treated", "Number of Sessions"]}
        subText={[
          "HBOT is FDA-approved for 13 different conditions including anti-aging, sports injuries, and detox/rehab.",
          "The number of sessions required varies based on the specific condition beingtreated.",
        ]}
        src={[null,"/medical.png"]}
        style={{}}
      />
      <HeroOverlay
        mainText="Revitalize Your Health 
      with HBOT"
        subText="Experience the amazing benefits of Hyperbaric Oxygen Therapy and improve your overall Well-being."
        src="/HBOT/heroHeader2.jpg"
        style={{ height: "1350px" }}
      />

      <Divider
        className="w-full h-[1px] rounded-b-[0.85px]"
        style={{
          backgroundColor: "#5c92e3",
          boxShadow: "rgba(0, 0, 0, 0.7) -13px 4px 8px 13px",
        }}
      />
      <BaseFooter/>
      <GeneralFooter/>
    </div>
  );
}
