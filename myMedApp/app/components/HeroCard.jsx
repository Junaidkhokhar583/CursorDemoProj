"use client"
import Button from "./Button";
import "/styles/heroCard.css";

const HeroCard = ({ bgColor, headText, detailsText, mainText, subText,src,style,href }) => {
  //const backgroundColor=bgColor;
  return (
    <div
      style={style}
      className="hero min-h-screen" 
    >
      <img id="img1" src={src[0]} className="opacity-[0.95] xsm:min-h-[1035px] lg:min-h-[85vh]" />
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-[90rem]">
        <img src={src[1]} className="max-w-[35rem] rounded-lg shadow-2xl " style={{height:"480px",width:"555px"}}/>
        <div>
          <h1 style={{color:bgColor}} className="text-5xl ml-[-2px] font-bold">{headText}</h1>
          <p style={{color:bgColor}} className="py-6 text-[1.2rem] leading-[1.9rem]">{detailsText}</p>
          <div className="flex gap-16">
            <div className=" max-w-80 py-6 ">
              <h3 className="font-bold text-xl ">{mainText[0]}</h3>
              <p className="py-3">{subText[0]}</p>
            </div>
            <div className=" max-w-80 py-6 ">
              <h3 className="font-bold text-xl ">{mainText[1]}</h3>
              <p className="py-3">{subText[1]}</p>
            </div>
          </div>

         <a href={href}>

          <Button
            type="button"
            text="Learn More"
            className="rounded-[4px]"
            style={{ height: "38px", borderradius: "3px", width: "102px" ,backgroundColor:"#044359"
            }}
            />
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
