import Comments from "@/components/Article/Comments/Comments";
import EditArticle from "@/components/Modals/EditArticle";
import Modal from "@/components/Modals/Modal";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  useDeleteArticleMutation,
  useGetArticleByIdQuery,
  useGetArticleCommentsQuery,
} from "@/store/apis/articlesApi";
import { openModal } from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Article = () => {
  const params = useSearchParams();
  const id = Number(params[0].get("id"));
  const { isLoading, isError, data: article } = useGetArticleByIdQuery(id);
  const { data: comments = [] } = useGetArticleCommentsQuery(id);
  const [deleteArticle, { isLoading: isLoadingDelete, isSuccess }] =
    useDeleteArticleMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [navigate, isSuccess]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading || isLoadingDelete) {
    return <Spinner />;
  }

  const handleDelete = () => {
    deleteArticle(article!.id);
  };

  return (
    <div className="flex flex-col gap-4 bg-primary min-h-screen w-full overflow-x-hidden py-4 px-4">
      <div className="w-1/2 rounded-lg flex flex-col overflow-hidden">
        <img
          src={article?.image ?? ""}
          alt="Article image"
          className="object-cover max-h-[600px] w-full aspect-square rounded-lg select-none pointer-events-none"
        />
        <div className="text-white space-y-3 text-wrap">
          <div className="flex gap-2 mt-2">
            <Button
              variant={"secondary"}
              onClick={() => dispatch(openModal("editArticle"))}
              className="w-[200px]"
            >
              Edit article
            </Button>
            <Button
              variant={"secondary"}
              onClick={handleDelete}
              className="w-[200px]"
            >
              Delete article
            </Button>
          </div>
          <h3 className="text-sm sm:text-xl border-b-2 border-neutral-400 rounded-b-none">
            Article's author:{" "}
            <span className="font-semibold">{article?.author.username}</span>
          </h3>
          <p className="break-words">{article?.content}</p>
        </div>
      </div>
      <Modal modalName="editArticle">
        <EditArticle modalName="editArticle" article={article!} />
      </Modal>
      <Comments comments={comments} id={id} />
    </div>
  );
};

export default Article;
