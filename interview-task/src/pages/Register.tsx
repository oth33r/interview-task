import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import useCustomForm from "@/hooks/useCustomForm";
import Error from "@/components/Error";
import { SubmitHandler } from "react-hook-form";
import { RegisterType } from "@/lib/types";
import { useRegisterUserMutation } from "@/store/apis/authApi";
import { useEffect } from "react";

const Register = () => {
  const { handleClick, handleSubmit, register, buttonRef, errors } =
    useCustomForm({ schema: RegisterSchema });
  const [registerUser, { isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
    if (isSuccess) navigate("/login");
  }, [navigate, isSuccess, isError, error]);

  const handleData: SubmitHandler<RegisterType> = (data) => {
    registerUser(data);
  };

  return (
    <Card className="w-[600px] bg-primary px-[50px] drop-shadow-xl border-none">
      <CardHeader className="items-center">
        <CardTitle className="text-white text-6xl font-semibold">
          Create account!
        </CardTitle>
        <CardDescription className="text-lg font-semibold">
          Let's get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleData)} className="space-y-2">
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="email"
              className="font-semibold text-white uppercase"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className={`${errors.email ? "border-rose-500" : "border-white"}`}
              placeholder="Type your email"
              {...register("email")}
            />
            <Error error={errors.email} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="firstName"
              className="font-semibold text-white uppercase"
            >
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="Type your first name"
              className={`${
                errors.firstName ? "border-rose-500" : "border-white"
              }`}
              {...register("firstName")}
            />
            <Error error={errors.firstName} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="lastName"
              className="font-semibold text-white uppercase"
            >
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Type your last name"
              className={`${
                errors.lastName ? "border-rose-500" : "border-white"
              }`}
              {...register("lastName")}
            />
            <Error error={errors.lastName} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label
              htmlFor="username"
              className="font-semibold text-white uppercase"
            >
              Username
            </Label>
            <Input
              id="username"
              placeholder="Type your username"
              className={`${
                errors.username ? "border-rose-500" : "border-white"
              }`}
              {...register("username")}
            />
            <Error error={errors.username} />
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
              type="password"
              className={`${
                errors.password ? "border-rose-500" : "border-white"
              }`}
              placeholder="Type your password"
              {...register("password")}
            />
            <Error error={errors.password} />
          </div>

          <button hidden ref={buttonRef} />
        </form>
      </CardContent>
      <CardFooter className="flex gap-2 flex-col items-start">
        <Button
          variant={"secondary"}
          className="w-full rounded-full h-[50px] font-bold text-lg"
          onClick={handleClick}
          disabled={isLoading}
        >
          Sign up
        </Button>
        {isError && (
          <span className="text-rose-500">Something went wrong, try again</span>
        )}
        <span className="text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default Register;
