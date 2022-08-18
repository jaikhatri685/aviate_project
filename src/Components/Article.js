import { text } from "../text";
import { useState } from "react";
import ArticleCard from "../Components/ArticleCard/Card"

const Para = (info) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <p className="text-lg leading-7 " style={{color:"#B8B8B8"}}>
      {showMore ? info+" " : `${info.substring(0, 700)+"..... "}`}
      {info.length>700?<p className="inline showbtn" onClick={()=>{setShowMore(!showMore)}}>{showMore?"Show Less":"Show More"}</p>:""}
    </p>
  );
};

function Article() {
  return (
    <>
      <div className="px-10 lg:px-24 pt-20">
        {/* <ArticleCard/> */}
        
        {text.map((item, index) => {
          return (
            <>
              <div
                className={`flex  flex-col-reverse items-center w-full montserrat text-left pb-20 text-white ${
                  index % 2 == 0 ? " lg:flex-row" : "  lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full lg:w-7/12 pt-16 lg:pt-0  ${index % 2 == 0 ? "lg:pr-16 " : "lg:pl-16"}`}
                >
                  <h1 className="font-bold text-3xl tracking-wider pb-4">
                    {item.heading}
                  </h1>
                  {Para(item.info)}
                </div>
                <div className="w-3/4 lg:w-5/12 flex flex-row justify-center items-center relative " >
                  <img className="rounded-3xl blog_img relative z-0 w-9/12" src={process.env.PUBLIC_URL+item.image} style={{boxShadow:"8px 8px 16px rgba(255, 255, 255, 0.07)"}}/>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
