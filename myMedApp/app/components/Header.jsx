"use client";

import React, {useEffect, useState } from "react";
import Button from "./Button";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { navItems } from "./data.js";
import Divider from "./Divider";
import {  useRouter } from "next/navigation";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isHovered,setisHovered]=useState(false);
  const router=useRouter();

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(min-width:1024px)');
    const handleResize=(e)=>{
      if(e.matches){
        setOpenMenu(false)
      }
    };
    mediaQuery.addEventListener('change',handleResize);
    return ()=>{
      mediaQuery.removeEventListener('change',handleResize);
    }
  },[])

  const colorDeep = "#304e70"; // Example value
  const headerColor = '#ffffff';
  
  return (
    <div className='sticky top-0 z-50 backdrop-contrast-125 ' style={{ backgroundColor: `${headerColor}`}}>
     <div className="" >
       <img  src="/04.jpg " alt="Image" className="absolute lg:max-h-[6rem] max-h-[5.3rem] xl:max-h-[6.4rem] min-w-[-webkit-fill-available] opacity-85" />
      <header className="flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:pt-[3px] md:px-16 lg:h-full xsm:pt-[6px] xsm:h-[69px] px-4 gap-4 flex-col">
        <div className="flex-row items-center flex justify-between lg:w-auto">
          <div
            className={`flex justify-center items-center mt-[0.1rem] border-[3px] lg:h-[4.7rem] lg:w-[9.2rem] h-[4.5rem] w-[9rem] xl:h-[5.1rem] xl:w-[9rem] rounded-lg p-1 pt-[0.45rem] z-10`}
            style={{ borderColor: '#2265a3' ,overflow:'hidden' }}
            onMouseEnter={()=>setisHovered(true)}
            onMouseLeave={()=>setisHovered(false)}
            >
              <a href="/">

              {
                isHovered ?
                <video
                src="/Molecular-Logo-vmake.mp4"
                alt="The Mobile Wellness Group"
                className="h-auto w-auto max-w-[100px] object-cover object-center scale-x-[4] scale-y-[2.9] transition-transform duration-300 ease-in-out"
                width="50"
                height="50"
                autoPlay
                
                muted
                
                />
                :
                <img
                src="/mainLogo.png"
                alt="The Mobile Wellness Group"
                className="h-auto w-full max-w-[100px] max-h-[60px] lg:scale-x-[1.46] lg:scale-y-[1.32] scale-x-[1.4] scale-y-[1.3]"
                width="50"
                height="50"
                />
              }
              </a>
            
          </div>
          <button
            className=" lg:`${setOpenMenu(false)}` lg:hidden focus:outline-none focus:shadow-outline xsm:mr-4 border-2 border-[#25357a] z-50 rounded-br-[10px] rounded-tl-[10px]"
            onClick={() => setOpenMenu((prev) => !prev)}
            >
            {openMenu ? (
              <IoCloseOutline className="w-7 h-7" />
            ) : (
              <IoMenuOutline className="w-7 h-7" />
            )}
          </button>
        </div>
        <nav
          className={`flex lg:items-center lg:justify-end lg:mr-[-55px] xl:mr-0 lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300  pt-[17px]
            ${
              openMenu
              ? "h-full scale-y-50 "
              : "h-0 transform lg:transform-none scale-y-0" 
              }`}
              >
          <ul className={`flex lg:flex-row flex-col justify-center font-medium gap-4 lg:items-center lg:gap-0 list-none 
            ${
              openMenu?
              "bg-[#6a9ab8eb] rounded-br-[10px] rounded-bl-[10px] -m-[5px] pl-[10px] min-h-40 font-semibold text-[1.25rem]" : ""
              }
         ` }>
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={`${item.href}`}
                  onClick={() => setOpenMenu(false)}
                  className={
                    "lg:px-4 z-[60] py-2 lg:mt-8 md:text-base bg-transparent lg:ml-[-13.96px] xl:ml-4 text-sm hover:text-navy focus:outline-none focus:shadow-outline"
                  }
                  >
                  {item.label}
                </a>
                <span
                  className="absolute left-[8px] bottom-0 w-full h-[2px] bg-navy transform scale-x-0 group-hover:scale-x-[.6] transition-transform duration-300 ease-in-out"
                  ></span>
              </li>
            ))}
          </ul>
   
          
      
        <Button
          type="button"
          text="Get Started"
          className={"px-10 py-3 rounded-full text-center md:text-base text-sm"}
          style={{ backgroundColor: `${colorDeep}` }}
          onClick={() => { router.push('/Coming-Soon'); }}
        />
   
         
        </nav>
      </header>

      {/* Horizontal Line with Center Shadow */}
      <Divider
        className="w-full h-[2px] mt-4"
        style={{
          backgroundColor: colorDeep,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
        />
        </div>
    </div>
        
  );
};

export default Header;
