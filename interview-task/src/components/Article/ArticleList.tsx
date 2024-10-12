interface ArticleListProps {
  children: React.ReactNode;
}

const ArticleList = ({ children }: ArticleListProps) => {
  return <ul className="flex flex-col gap-4">{children}</ul>;
};

export default ArticleList;
