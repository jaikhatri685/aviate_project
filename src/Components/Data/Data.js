//Axios for API call
import axios from "axios";
//React
import { useState, useEffect } from "react";
//Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * Displays the graph
 * @returns 
 */

function Data() {

  const [data, setData] = useState(); //maintains data state

  const fetchData = () => {
    axios
      .get(
        "https://api.blockchain.info/charts/transactions-per-second?timespan=3weeks&rollingAverage=8hours&format=json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-36 flex  flex-col items-center mb-20 w-full">
      <h1 className="text-white text-3xl pb-4 w-full text-center">
        The number of Bitcoin transactions added to the mempool per second.
      </h1>
      <LineChart
        width={500}
        height={300}
        data={data?.values}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default Data;
