import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useRef } from "react";
import { ZodSchema} from "zod";

interface useFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
}

const useCustomForm = <T extends FieldValues>({schema}: useFormProps<T>) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<T>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return {
    buttonRef,
    reset,
    errors,
    register,
    handleSubmit,
    handleClick
  }
}

export default useCustomForm