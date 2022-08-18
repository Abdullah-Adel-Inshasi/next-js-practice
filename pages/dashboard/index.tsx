import axios from "axios";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import IDashboard from "../../src/interfaces/dashboard";
const Dashboard: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<null | IDashboard>(null);
  useEffect(() => {
    (async () => {
      await axios
        .get<IDashboard>("http://localhost:4200/dashboard")
        .then((dashboard) => setData(dashboard.data))
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false));
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (hasError) {
    return <>Error</>;
  }
  return (
    <>
      {Object.keys(data!).map((key) => (
        <div key={key}>
          {key} : {data![key as keyof IDashboard]}
        </div>
      ))}
    </>
  );
};

export default Dashboard;
