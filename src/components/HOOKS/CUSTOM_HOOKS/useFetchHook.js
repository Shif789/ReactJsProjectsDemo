import React, { useEffect, useState } from "react";

export default function useFetchHook(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching is not successful");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData((prevTodos) => data);
          setIsLoading((prevIsLoading) => false);
          setError((prevError) => null);
        })
        .catch((error) => {
          setError((prevError) => error.message);
          setIsLoading((prevIsLoading) => false);
        });
    }, 2000);
  }, []);
  return { data, isLoading, error };
}
