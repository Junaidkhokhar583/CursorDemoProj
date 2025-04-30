"use client"
import Button from "./Button";

const DescriptionCard = ({ headText, detailsText, mainText, subText, src }) => {
  return (
    <div>
      <section className="py-16 min-h-[100vh]">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">{headText}</h3>
          <h5 className="text-center mb-8">{detailsText}</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[55vh] ">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src={src[0]} alt="Service 1" width={80} height={80}  className="xl:ml-[125px] 2xl:ml-[165px] lg:ml-[88px] md:ml-[45px]  sm:ml-[220px] xsm:ml-[70px]"/>
              <h4 className="text-xl font-semibold mt-4">{mainText[0]}</h4>
              <p className="text-gray-600 mt-2 min-h-[25vh]">{subText[0]}</p>
                 <div className="mt-auto flex justify-center">
                  <a href="/Contact-Us">
                  <Button
                    type="button"
                    text="Learn More"
                    className="rounded-[4px]"
                    style={{
                      height: "38px",
                      zIndex:'0',
                      width: "102px",
                      backgroundColor: "#044359",
                      
                    }}
                    onClick={()=>{}}
                  />
                  </a>
                </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src={src[1]} alt="Service 2" width={80} height={80} className=" xl:ml-[125px] 2xl:ml-[165px] lg:ml-[88px] md:ml-[45px]  sm:ml-[220px] xsm:ml-[70px]" />
              <h4 className="text-xl font-semibold mt-4">{mainText[1]}</h4>
              <p className="text-gray-600 mt-2 min-h-[25vh]">{subText[1]}</p>
                 <div className="mt-auto flex justify-center">
                  <a href="/Contact-Us">

                  <Button
                    type="button"
                    text="Learn More"
                    className="rounded-[4px]"
                    style={{
                      zIndex:'0',
                      height: "38px",
                      width: "102px",
                      backgroundColor: "#044359"
                    }}
                    onClick={()=>{}}
                    />
                    </a>
                </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src={src[2]} alt="Service 3" width={80} height={80} className=" xl:ml-[125px] 2xl:ml-[165px] lg:ml-[88px] md:ml-[45px]  sm:ml-[220px] xsm:ml-[70px]" />
              <h4 className="text-xl font-semibold mt-4">{mainText[2]}</h4>
              <p className="text-gray-600 mt-2 min-h-[25vh]">{subText[2]}</p>
                <div className="mt-auto flex justify-center">
                  <a href="/Contact-Us">
                  <Button
                    type="button"
                    text="Learn More"
                    className="rounded-[4px]"
                    style={{
                      zIndex:'0',
                      height: "38px",
                      width: "102px",
                      backgroundColor: "#044359"
                    }}
                    onClick={()=>{}}
                  />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DescriptionCard;
