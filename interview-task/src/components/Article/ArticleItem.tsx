import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface ArticleItemProps {
  image: string | null;
  title: string;
  slug: string;
  id: number;
}

const ArticleItem = ({ image, title, slug, id }: ArticleItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[500px] h-[475px] bg-primary px-4 py-4 rounded-xl text-white flex flex-col gap-4 justify-between">
      <img
        src={image ?? ""}
        alt="Article image"
        className="w-full rounded-lg h-3/4 object-cover pointer-events-none select-none"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-3xl truncate">{title}</h2>
        <Button
          variant={"secondary"}
          className="w-[150px] text-sm"
          onClick={() => navigate(`/${slug}?id=${id}`)}
        >
          Continue reading
        </Button>
      </div>
    </div>
  );
};

export default ArticleItem;
