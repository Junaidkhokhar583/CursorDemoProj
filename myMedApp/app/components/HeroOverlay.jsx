"use client"
import Button from "./Button";

const HeroOverlay = ({ mainText, subText, src, style, visibility }) => {
  return (
    <div className="hero overflow-hidden relative">
      {/* Background Image */}
      <img
        src={src}
        className="opacity-[0.85] mb-[-40vh] w-full object-cover "
        style={style}
      />
      
      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Blurred Overlay */}
      <div className="absolute inset-0 backdrop-blur-[8px] z-20"></div>
     
      {/* Content */}     
      <div className="relative z-30 text-neutral-content text-center">
        <div className="w-full gap-1">
          <div className="grid w-full grid-flow-col place-items-center lg:place-items-start gap-x-4 lg:gap-x-24 px-4 lg:px-16 xmd:min-w-[auto] xmd:grid-flow-col xsm:min-w-[100%] xsm:grid-flow-row">
            <aside className="flex flex-col justify-center pt-10 lg:pt-[65px] text-center lg:text-left">
              <h3 className="text-white font-bold text-xl lg:text-2xl">
                Revitalize
              </h3>
              <h1 className="text-white drop-shadow-glow font-bold text-3xl lg:text-5xl leading-snug lg:leading-[6rem] mt-4">
                {mainText}
              </h1>
            </aside>

            <section className="pt-10 lg:pt-[85px] ">
              <p className="text-gray-300 text-base lg:text-lg leading-6 lg:leading-8 font-bold mb-6 lg:mb-16 exsm:ml-[-3px] xmd:ml-[78px]">
                {subText}
              </p>
              <div
                className="flex flex-row gap-4 lg:gap-8 exsm:ml-[-0.5rem] xmd:ml-[5.5rem] justify-center"
                style={{ visibility: visibility }}
              >
                <a href="/Contact-Us">

                <Button
                  type="button"
                  text="Contact"
                  className="rounded-[4px]"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "38px",
                    width: "102px",
                  }}
                  onClick={()=>{}}
                  />
                  </a>

                  <a href="/About-Us">
                <Button
                  type="button"
                  text="Learn More"
                  className="rounded-[4px] border-solid border-2 border-black"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    height: "38px",
                    width: "102px",
                  }}
                  onClick={()=>{}}
                  />
                  </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
