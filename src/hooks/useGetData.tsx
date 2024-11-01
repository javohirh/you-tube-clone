import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

const useGetData = (func: AxiosInstance) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Videos"],
    queryFn: async () => {
      const response = await func();
      return response;
    },
  });

  return { data, isLoading, isError };
};

export default useGetData;
