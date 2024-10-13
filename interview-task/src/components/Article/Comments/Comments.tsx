import CommentItem from "./CommentItem";
import { Comment, CommentType } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useCustomForm from "@/hooks/useCustomForm";
import { CommentSchema } from "@/schemas/CommentSchema";
import Error from "@/components/Error";
import { useAddCommentMutation } from "@/store/apis/articlesApi";

interface CommentsProps {
  id: number;
  comments: Comment[];
}

const Comments = ({ id, comments }: CommentsProps) => {
  const { register, handleSubmit, reset, errors } = useCustomForm({
    schema: CommentSchema,
  });
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleComment = (data: CommentType) => {
    addComment({ id, data: { ...data, parent: null } });
    reset();
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleComment)} className="flex gap-4 mb-5">
        <div className="flex flex-col gap-2 w-[400px]">
          <Input {...register("content")} placeholder="Type your comment" />
          <Error error={errors.content} />
        </div>
        <Button
          type="submit"
          variant={"secondary"}
          className="max-w-[150px]"
          disabled={isLoading}
        >
          Comment
        </Button>
      </form>

      {comments?.map((comment, idx) => (
        <CommentItem key={idx} comment={comment} articleId={id} />
      ))}
    </div>
  );
};

export default Comments;
