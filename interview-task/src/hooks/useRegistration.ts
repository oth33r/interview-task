import { RegisterType } from '@/lib/types';
import { api } from '@/lib/utils';
import { AxiosError } from 'axios';
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form';

const useRegistration = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const handleData: SubmitHandler<RegisterType> = async (data) => {
    try {
      setIsLoading(true)
      const response = await api.post("/registration/", {
          "email": data.email,
          "first_name": data.firstName,
          "last_name": data.lastName,
          "username": data.username,
          "password": data.password
      });
      setData(response.data)
      console.log(response);
    } catch (err) {
      console.log(err)
      setError(err as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    handleData,
    isLoading,
    error
  }
}

export default useRegistration