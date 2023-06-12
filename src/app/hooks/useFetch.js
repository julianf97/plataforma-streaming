import { useState, useEffect, useCallback } from 'react';
import REQUESTS from '../services/utils/requests';

export const useFetch = () => {
  const [dataState, setDataState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const handleFetch = useCallback(async () => {
    try {
      const arrayOfRequests = [
        ...Object.values(REQUESTS.MOVIES),
        ...Object.values(REQUESTS.TV_SERIES),
      ].map((request) => fetch(request));

      const responses = await Promise.all([...arrayOfRequests]);

      const dataApi = responses.map(async (response) => await response.json());

      const parsedDataApi = await Promise.all([...dataApi]);

      console.log('parsedDataApi', parsedDataApi);

      setDataState((prev) => ({
        ...prev,
        loading: false,
        data: parsedDataApi,
      }));
    } catch (error) {
      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  }, []);

  useEffect(() => {
    if (dataState?.data?.length === 0) handleFetch();
  }, [dataState?.data?.length, handleFetch]);

  return {
    ...dataState,
  };
};
