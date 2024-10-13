import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Error from "@/components/Error";
import useCustomForm from "@/hooks/useCustomForm";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { closeModal } from "@/store/slices/modalSlice";
import { ArticleSchema } from "@/schemas/ArticleSchema";
import { Article, ArticleInput } from "@/lib/types";
import { useEditArticleMutation } from "@/store/apis/articlesApi";

interface NewModalProps {
  modalName: string;
  article: Article;
}

const EditArticle = ({ modalName, article }: NewModalProps) => {
  const { handleClick, handleSubmit, register, buttonRef, errors, reset } =
    useCustomForm({ schema: ArticleSchema });
  const [editArticle, { isLoading, isSuccess }] = useEditArticleMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      reset();
      dispatch(closeModal(modalName));
    }
  }, [dispatch, isSuccess, reset, modalName]);

  const handleData: SubmitHandler<ArticleInput> = (data) => {
    editArticle({ id: article.id, data });
  };

  const handleClose = () => {
    reset();
    dispatch(closeModal(modalName));
  };

  return (
    <Card className="w-[600px] bg-primary px-[50px] drop-shadow-xl border-none relative">
      <CardHeader className="items-center">
        <CardTitle className="text-white text-5xl font-semibold">
          Edit article
        </CardTitle>
        <button
          className="absolute text-white top-2 right-4"
          onClick={handleClose}
        >
          <X />
        </button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleData)} className="space-y-2">
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="title"
              className="font-semibold text-white uppercase"
            >
              Title
            </Label>
            <Input
              id="title"
              defaultValue={article.title}
              placeholder="Type title"
              className={`${errors.title ? "border-rose-500" : "border-white"}`}
              {...register("title")}
            />
            <Error error={errors.title} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="content"
              className="font-semibold text-white uppercase"
            >
              Content
            </Label>
            <textarea
              rows={4}
              placeholder="Type content"
              defaultValue={article.content}
              className={`${
                errors.content && "border-rose-500"
              } rounded-lg bg-primary border border-white resize-none text-white py-1.5 px-2 text-sm placeholder:text-neutral-500`}
              {...register("content")}
            />
            <Error error={errors.content} />
          </div>
          <div>
            <Label
              htmlFor="image"
              className="font-semibold text-white uppercase"
            >
              Image
            </Label>
            <Input type="file" id="image" {...register("image")} />
          </div>
          <button hidden ref={buttonRef} />
        </form>
      </CardContent>
      <CardFooter className="flex gap-2 flex-col items-start">
        <Button
          variant={"secondary"}
          type="submit"
          onClick={handleClick}
          disabled={isLoading}
        >
          Edit article
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditArticle;
