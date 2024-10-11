import { LoginType } from '@/lib/types';
import { api } from '@/lib/utils';
import { AxiosError } from 'axios';
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const handleData: SubmitHandler<LoginType> = async (data) => {
    try {
      setIsLoading(true)
      const response = await api.post("/token/", {
          "username": data.username,
          "password": data.password
      });
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (err) {
      console.log(err)
      setError(err as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleData,
    isLoading,
    error
  }
}

export default useLogin