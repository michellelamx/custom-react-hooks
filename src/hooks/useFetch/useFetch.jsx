import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
