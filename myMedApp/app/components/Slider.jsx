import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Slider = ({ style,mainText,subText,src}) => {
  return (
    <div className="carousel snap-none w-full" style={style}>

      <div className="carousel-item relative w-full" id="slide1">
        <img src={src[0]} className="w-full" />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 backdrop-blur-[8px] z-20"></div>

      {/* {left & right arrow} */}
        <div className="absolute left-2.5 right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between  z-30">
          <a href="#slide3" className=" hover:animate-bounce">
            <BsFillArrowLeftCircleFill size={40} color="#1270a5" />{" "}
          </a>
          <a href="#slide2" className=" hover:animate-bounce">
            <BsFillArrowRightCircleFill color="#1270a5" size={40} />{" "}
          </a>
        </div>
    {/* {content} */}

        <div className="absolute text-center  top-1/2 z-40 right-14 left-14 -mt-20 mr-3">
            <div className=" w-full grid grid-flow-row gap-y-10 text-neutral-content">
              <h1 className="font-bold text-[#77b5b0] text-3xl lg:text-6xl" style={{ filter: "drop-shadow(0 4px 3px rgb(6 0 0 / 75%)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}}>{mainText[0]}</h1>
              <p className=" lg:text-[1.55rem] text-base lg:leading-7 text-[#d0e3de]"> {subText[0]}</p>
            </div>
        </div>
      </div>




      <div className="carousel-item relative w-full" id="slide2">
        <img src={src[1]}  className="w-full" />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 backdrop-blur-[8px] z-20"></div>

      {/* {left & right arrow} */}
        <div className="absolute left-2.5 right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between  z-30">
          <a href="#slide1" className=" hover:animate-bounce">
            <BsFillArrowLeftCircleFill size={40} color="#1270a5" />{" "}
          </a>
          <a href="#slide3" className=" hover:animate-bounce">
            <BsFillArrowRightCircleFill color="#1270a5" size={40} />{" "}
          </a>
        </div>
    {/* {content} */}

        <div className="absolute text-center  top-1/2 z-40 right-14 left-14 -mt-20 mr-3">
            <div className=" w-full grid grid-flow-row gap-y-10 text-neutral-content">
              <h1 className="font-bold text-[#af7169] text-3xl lg:text-6xl drop-shadow-md" style={{ filter: "drop-shadow(0 4px 3px rgb(6 0 0 / 75%)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}} >{mainText[1]}</h1>
              <p className=" lg:text-[1.55rem] text-base lg:leading-7 text-[#e3d5d5]"> {subText[1]}</p>
            </div>
        </div>
      </div>






      <div className="carousel-item relative w-full" id="slide3">
        <img src={src[2]}  className="w-full" />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 backdrop-blur-[8px] z-20"></div>

      {/* {left & right arrow} */}
        <div className="absolute left-2.5 right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between  z-30">
          <a href="#slide2" className=" hover:animate-bounce">
            <BsFillArrowLeftCircleFill size={40} color="#1270a5" />{" "}
          </a>
          <a href="#slide1" className=" hover:animate-bounce">
            <BsFillArrowRightCircleFill color="#1270a5" size={40} />{" "}
          </a>
        </div>
    {/* {content} */}

        <div className="absolute text-center  top-1/2 z-40 right-14 left-14 -mt-20 mr-3">
            <div className=" w-full grid grid-flow-row gap-y-10 text-neutral-content">
              <h1 className="font-bold text-[#44acd7] text-3xl lg:text-6xl drop-shadow-md"  style={{ filter: "drop-shadow(0 4px 3px rgb(6 0 0 / 75%)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}}>{mainText[2]}</h1>
              <p className=" lg:text-[1.55rem] text-base lg:leading-7 text-[#c8d7dd]"> {subText[2]}</p>
            </div>
        </div>
      </div>




    </div>
  );
};

export default Slider;
