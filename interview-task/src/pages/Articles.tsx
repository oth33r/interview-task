import ArticleItem from "@/components/Article/ArticleItem";
import ArticleList from "@/components/Article/ArticleList";
import Menu from "@/components/Menu";
import Spinner from "@/components/Spinner";
import { useGetArticlesQuery } from "@/store/apis/articlesApi";
const Articles = () => {
  const { isLoading, isError, data: articles = [] } = useGetArticlesQuery();

  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex gap-4 mt-5">
      <ArticleList>
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            id={article.id}
            slug={article.slug}
            image={article.image}
            title={article.title}
          />
        ))}
      </ArticleList>
      <Menu />
    </div>
  );
};

export default Articles;
