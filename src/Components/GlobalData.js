import React, { useState, useEffect } from "react";
import Axios from "axios";

function GlobalData() {
  const [covidGlobalData, setCovidGlobalData] = useState("");
  const [updatedDate, setDate] = useState("");
  const getGlobalData = () => {
    Axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then(
      (response) => {
        setCovidGlobalData(response.data.data);
        setDate(response.data.data.update_date_time);
      }
    );
  };

  useEffect(() => {
    getGlobalData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium text-gray-500">Global Information</h1>
      <p>Last Updated: {updatedDate}</p>
      <div className="flex justify-center pt-5">
        <div className="border-0 shadow-xl w-60 px-5 py-5">
          <h3 className="text-xl pb-2 font-medium">Global Recovered</h3>
          <p className="text-xl font-light">
            {covidGlobalData.global_recovered}
          </p>
        </div>
      </div>
      <div className="flex justify-center py-5 lg:gap-10">
        <div className="border-0 shadow-xl w-60 px-5 py-5">
          <h3 className="text-xl pb-2 font-medium">Global New Cases</h3>
          <p className="text-xl font-light">
            {covidGlobalData.global_new_cases}
          </p>
        </div>
        <div className="border-0 shadow-xl w-60 px-5 py-5">
          <h3 className="text-xl pb-2 font-medium">Global New Deaths</h3>
          <p className="text-xl font-light">
            {covidGlobalData.global_new_deaths}
          </p>
        </div>
      </div>
      <div className="flex justify-center py-5 lg:gap-10">
        <div className="border-0 shadow-xl w-60 px-5 py-5">
          <h3 className="text-xl pb-2 font-medium">Global Total Cases</h3>
          <p className="text-xl font-light">
            {covidGlobalData.global_total_cases}
          </p>
        </div>
        <div className="border-0 shadow-xl w-60 px-5 py-5">
          <h3 className="text-xl pb-2 font-medium">Global Total Deaths</h3>
          <p className="text-xl font-light">{covidGlobalData.global_deaths}</p>
        </div>
      </div>
    </div>
  );
}

export default GlobalData;
