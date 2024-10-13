import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCustomForm from "@/hooks/useCustomForm";
import { Comment, CommentType } from "@/lib/types";
import { CommentSchema } from "@/schemas/CommentSchema";
import {
  useDeleteCommentMutation,
  useEditCommentMutation,
  useReplyOnCommentMutation,
} from "@/store/apis/articlesApi";
import { Edit, Reply, Trash } from "lucide-react";
import { useState } from "react";
import Error from "@/components/Error";

interface CommentItemProps {
  articleId: number;
  comment: Comment;
}

const CommentItem = ({ articleId, comment }: CommentItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const { register, handleSubmit, reset, errors } = useCustomForm({
    schema: CommentSchema,
  });
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const [editComment] = useEditCommentMutation();
  const [replyOnComment] = useReplyOnCommentMutation();

  const handleDelete = (commentId: number) => {
    deleteComment({ commentId, articleId });
  };

  const handleEdit = (data: CommentType, commentId: number) => {
    editComment({ articleId, commentId, data });
    reset();
    setIsEdit(false);
  };

  const handleReply = (data: CommentType, commentId: number) => {
    replyOnComment({
      articleId,
      data: { ...data, parent: commentId },
    });
    reset();
    setIsReply(false);
  };

  const handleEditClick = () => {
    setIsReply(false);
    setIsEdit((prev) => !prev);
    reset();
  };

  const handleReplyClick = () => {
    setIsEdit(false);
    setIsReply((prev) => !prev);
    reset();
  };

  return (
    <div className="text-left space-y-3">
      <div className="bg-white px-2 py-1.5 rounded-md max-w-[500px] w-fit break-words space-y-1">
        <h5 className="text-neutral-400 text-sm">{comment.author.username}</h5>
        <p>{comment.content}</p>
        {isEdit && (
          <form
            onSubmit={handleSubmit((data) => handleEdit(data, comment.id))}
            className="flex gap-4 mb-5"
          >
            <div className="flex flex-col gap-2 w-[400px]">
              <Input
                {...register("content")}
                placeholder="Type your edited comment"
                className="h-[40px] text-black"
              />
              <Error error={errors.content} />
            </div>
            <Button
              type="submit"
              className="max-w-[150px]"
              disabled={isLoading}
            >
              Reply
            </Button>
          </form>
        )}
        {isReply && (
          <form
            onSubmit={handleSubmit((data) => handleReply(data, comment.id))}
            className="flex gap-4 mb-5"
          >
            <div className="flex flex-col gap-2 w-[400px]">
              <Input
                {...register("content")}
                placeholder="Type your reply comment"
                className="h-[40px] text-black"
              />
              <Error error={errors.content} />
            </div>
            <Button
              type="submit"
              className="max-w-[150px]"
              disabled={isLoading}
            >
              Reply
            </Button>
          </form>
        )}
        <div className="flex gap-2 items-center">
          <Button className="w-fit h-6 group" onClick={handleEditClick}>
            <Edit size={14} className="group-hover:text-emerald-500" />
          </Button>
          <Button className="w-fit h-6 group" onClick={handleReplyClick}>
            <Reply size={14} className="group-hover:text-emerald-500" />
          </Button>
          <Button
            className="w-fit h-6 group"
            onClick={() => handleDelete(comment.id)}
          >
            <Trash size={14} className="group-hover:text-rose-500" />
          </Button>
        </div>
      </div>
      <div className="pl-6">
        {comment.children.map((nestedComment, idx) => (
          <CommentItem
            key={idx}
            comment={nestedComment}
            articleId={articleId}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentItem;
