import React, { useEffect, useState } from "react";
import Data from "./Data";
import Loading from "./Loading";
import useDots from "./useDots";

const WithLoading = Loading(Data);

export const DatawithLoading = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dots = useDots();
  useEffect(() => {
    const interval = setTimeout(() => {
      setData("New data");
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);
  return (
    <div>
      <WithLoading isLoading={isLoading} data={data} />

      <button onClick={() => setIsLoading(true)}>reset</button>
    </div>
  );
};
