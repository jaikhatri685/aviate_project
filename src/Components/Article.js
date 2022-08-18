import { text } from "../text";
import ArticleCard from "../Components/ArticleCard/Card"

function Article() {
  return (
    <>
      <div className="px-10 lg:px-24 py-20 ">
        
        {text?.map((item, index) => {
          return (
            
                 <ArticleCard item={item} index={index}/>
          
          );
        })}
      </div>
    </>
  );
}

export default Article;
