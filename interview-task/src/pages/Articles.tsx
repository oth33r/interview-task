import { api } from "@/lib/utils";
import { useEffect, useState } from "react";

const Articles = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await api.get("/articles/");
      setData(response.data);
    };

    fetchArticles();
  }, []);

  console.log(data);
  return <div>1</div>;
};

export default Articles;
