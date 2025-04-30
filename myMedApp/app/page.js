"use client"
import React from "react";
import HeroHeader from "./components/HeroHeader.jsx";
import DescriptionCard from "./components/DescriptionCard.jsx";
import HeroCard from "./components/HeroCard.jsx";
import Button from './components/Button';
import Header from "./components/Header.jsx";
import BaseFooter from "./components/BaseFooter.jsx";
import GeneralFooter from "./components/GeneralFooter.jsx";



export default function Home() {
  
  return (
    <div className="bg-[#f2f7fa] xsm:w-[130%] exmd:w-full">
      
      <Header/>
      <HeroHeader />

      <DescriptionCard
        headText="Comprehensive Health Solutions for Your Well-being"
        detailsText="At The Mobile Wellness Group, we offer a wide range of advanced medical testing and wellness services to meet your health needs. Our state-of-the-art mobile vans equipped with hyperbaric chambers allow us to provide convenient and comprehensive healthcare solutions wherever you are."
        mainText={[
          "Covid-19 Testing",
          "Mobile Drug Testing",
          "RSV and Flu A & B Testing",
        ]}
        subText={[
          "Stay safe and informed with our on-site Covid-19 Testing Services",
          "Convenient and Reliable Mobile Drug Testing Services",
          "Comprehensive Testing for RSV, FLU A & B viruses",
        ]}
        src={["/covid-19.png","/Mobile.png","/RSV.png"]}
       
      />

      <HeroCard
        bgColor=""
        headText="Introducing Our State-of-the-Art Mobile Vans"
        detailsText="Experience advanced Medical technology on wheels with our new mobile vans.Equipped with state-of-the-art equipment, our vans bring cutting-edge healthcare solutions directly to you."
        mainText={["Advanced Technology", "Convenient Services"]}
        subText={[
          "Our mobile vans are equipped with the latest medical technology, ensuring top-quality care.",
          "Save time and effort with our convenient mobile healthcare services brought to your location.",
        ]}
        src={[null,"/assets/amb.jpg"]}
        style={{backgroundColor: "#e9f5ff" }}
        href="/About-Us"
      />
      <HeroCard
        bgColor="white"
        headText="Our Journey to Mobile Wellness Solutions"
        detailsText="The Mobile Wellness Group has a rich history , starting as WeTestU.com and evolving into a leading provider of mobile health solutions.Our mission it to bring advanced medical tesing and wellness services directly to your doorstep,providing convenience,reliablity and comprehensive care."
        mainText=""
        subText=""
        src={["/hero-background.jpg","/medical.png"]}
        style={{backgroundColor: "#FAFAFA" , minHeight:"60vh"}}
        href="/About-Us"
      />
      <div className='hero min-h-[70vh]'> 
        <div className='hero-content flex-col lg:flex-row-reverse '>
        <div className='max-w-[35rem] '>
        <div className='' >

        <p className='text-xl pb-2'>Contact Us now to book your Appointment and Experience the Convenience of our healthcare services.</p>
        <div className='pt-[6.4px] space-x-4'>
<a href="/Contact-Us">
        <Button
         type='button'
         text='Contact'
         className='rounded-[4px] '
         style={{backgroundColor:'black',color:'white', height:'38px', width:'102px'}}
         onClick={()=>{}}
          />
          </a> 
 <a href="/Services">
        <Button
         type='button'
         text='Learn More'
         className='rounded-[4px] border-solid border-2 border-black '
         style={{backgroundColor:'white',color:'black', height:'38px', width:'102px'}}
         onClick={()=>{}}
         />
         </a>
         </div>
         </div>
         </div>

         <div className='pr-[4.5rem]'>
        <h3 className='text-5xl font-bold' >Schedule an Appointment Today!</h3>
         </div>
       

         
         </div>
      </div>
     <BaseFooter/>
     <GeneralFooter/>
    
    </div>
  );
}
