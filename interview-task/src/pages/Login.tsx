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
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { LoginSchema } from "@/schemas/LoginSchema";
import Error from "@/components/Error";
import useCustomForm from "@/hooks/useCustomForm";
import useLogin from "@/hooks/useLogin";

const Login = () => {
  const { handleClick, handleSubmit, register, buttonRef, errors } =
    useCustomForm({ schema: LoginSchema });
  const { isLoading, handleData } = useLogin();

  return (
    <Card className="w-[600px] bg-primary px-[50px] drop-shadow-xl border-none">
      <CardHeader className="items-center">
        <CardTitle className="text-white text-6xl font-semibold">
          Hi there!
        </CardTitle>
        <CardDescription className="text-lg font-semibold">
          Sign in to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleData)} className="space-y-2">
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
              placeholder="Type your password"
              className={`${
                errors.password ? "border-rose-500" : "border-white"
              }`}
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
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full h-[50px] font-bold text-lg"
          onClick={handleClick}
        >
          Log in
        </Button>
        <span className="text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Sign up
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default Login;
