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
import { ChangePasswordSchema } from "@/schemas/ChangePasswordSchema";
import { SubmitHandler } from "react-hook-form";
import { ChangePasswordType } from "@/lib/types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { addModal, closeModal } from "@/store/slices/modalSlice";
import { useChangePasswordMutation } from "@/store/apis/authApi";

interface ChangePasswordModalProps {
  modalName: string;
}

const ChangePasswordModal = ({ modalName }: ChangePasswordModalProps) => {
  const { handleClick, handleSubmit, register, buttonRef, errors, reset } =
    useCustomForm({ schema: ChangePasswordSchema });
  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      reset();
      dispatch(closeModal(modalName));
    }

    dispatch(addModal(modalName));
  }, [dispatch, isSuccess, reset, modalName]);

  const handleData: SubmitHandler<ChangePasswordType> = (data) => {
    changePassword(data);
  };

  const handleClose = () => {
    reset();
    dispatch(closeModal(modalName));
  };

  return (
    <Card className="w-[600px] bg-primary px-[50px] drop-shadow-xl border-none relative">
      <CardHeader className="items-center">
        <CardTitle className="text-white text-5xl font-semibold">
          Change password
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
              htmlFor="oldPassword"
              className="font-semibold text-white uppercase"
            >
              Old password
            </Label>
            <Input
              id="oldPassword"
              placeholder="Type your old password"
              className={`${
                errors.oldPassword ? "border-rose-500" : "border-white"
              }`}
              {...register("oldPassword")}
            />
            <Error error={errors.oldPassword} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="password"
              className="font-semibold text-white uppercase"
            >
              Password
            </Label>
            <Input
              id="password"
              placeholder="Type your password"
              className={`${
                errors.password ? "border-rose-500" : "border-white"
              }`}
              {...register("password")}
            />
            <Error error={errors.password} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="confirmedPassword"
              className="font-semibold text-white uppercase"
            >
              Confirm password
            </Label>
            <Input
              id="confirmedPassword"
              placeholder="Type your password"
              className={`${
                errors.confirmedPassword ? "border-rose-500" : "border-white"
              }`}
              {...register("confirmedPassword")}
            />
            <Error error={errors.confirmedPassword} />
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
          Change password
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChangePasswordModal;
