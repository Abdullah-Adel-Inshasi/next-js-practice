import axios from "axios";
import React from "react";
import useSWR from "swr";
import IDashboard from "../../src/interfaces/dashboard";

const DashboardSWR = () => {
  const { data, error } = useSWR<IDashboard>("dashboard", async () => {
    const dashboard = await axios
      .get<IDashboard>("http://localhost:4200/dashboard")
      .then((dashboard) => dashboard.data);
    return dashboard;
  });

  if (error) {
    return <h1>Error</h1>;
  }

  if (!data) {
    return <h1>Loading ...</h1>;
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

export default DashboardSWR;
