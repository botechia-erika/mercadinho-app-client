import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.result);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error);
        console.log(error.response.data);
      });
  }, [url]);

  return [data, isLoading, error];
}