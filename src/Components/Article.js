//data displayed in cards
import { text } from "../text";

//Individual Article Card Component
import ArticleCard from "../Components/ArticleCard/Card";

/**
 * Article Container Component
 * @returns
 */

function Article() {
  return (
    <>
      <div className="px-10 lg:px-24 py-20 ">
        {text?.map((item, index) => {
          return <ArticleCard item={item} index={index} />;
        })}
      </div>
    </>
  );
}

export default Article;
