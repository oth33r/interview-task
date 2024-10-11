import { FieldError } from "react-hook-form";

interface ErrorProps {
  error: FieldError | undefined;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <>
      {error && (
        <span className="text-rose-500 font-semibold">{error.message}</span>
      )}
    </>
  );
};

export default Error;
