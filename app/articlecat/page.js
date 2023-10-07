import { ArticleCard } from "@/components/Cards";

const ArticleCat = ({ articleCat, filterCat, articleData, setArticleData }) => {
  //   console.log(articleCat);
  return (
    <div>
      {/* {articleCat.map((cat) => {
        return (
          <p key={cat.id} onClick={() => filterCat(cat)}>
            {cat}
          </p>
        );
      })} */}

      {articleData?.map((post) => {
        // console.log(post.attributes);

        return (
          <div className="col-md-6" key={post.id}>
            <ArticleCard {...post} />
          </div>
        );
      })}
      {/* hi */}
    </div>
  );
};

// update this code to be where the button/link goes when a category is clicked

export default ArticleCat;
