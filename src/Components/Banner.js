import Background from "../Assets/images/Mask.svg";
import Banner1 from "../Assets/images/Banner1.svg";

/**
 * Banner Component which is displayed on the top of article page
 * @returns
 */

function Banner() {
  return (
    <div className="relative">
      <img className=" z-0 background w-full" src={Background} />
      <div className="absolute background_upper top-20  sm:top-26 lg:top-32 xl:top-48  z-1  w-full">
        <div className="flex flex-row w-full">
          <div className="flex flex-row justify-center items-center pt-4 w-1/2 ">
            <img className="w-10/12" src={Banner1} />
          </div>
          <div className="flex flex-col  justify-center items-center w-1/2  montserrat p-4 sm:p-12 lg:p-24">
            <div>
              <h1 className="font-bold text-lg sm:text-xl md:text-4xl text-white">
                Blockchain and
              </h1>
              <h1 className="font-bold text-lg  sm:text-xl md:text-4xl text-white">
                Bitcoin
              </h1>
              <p className="pt-2 font-normal hidden sm:block text-white text-sm md:text-xl">
                Bitcoin, cryptocurrency, blockchain... So what does it all mean?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
