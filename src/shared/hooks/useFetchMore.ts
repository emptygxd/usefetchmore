import { useEffect, useState } from "react";

type Params = {
  apiUrl: string;
  limit?: number;
};

export const useFetchMore = ({ apiUrl, limit = 5 }: Params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limitState, setLimitState] = useState(limit);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiUrl}?limit=${limitState}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [apiUrl, limitState]);

  const fetchMore = () => {
    setLimitState((prev) => prev + 5);
  };

  return { data, error, isLoading, fetchMore };
};
