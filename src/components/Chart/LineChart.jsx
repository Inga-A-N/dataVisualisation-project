import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import { Data } from "./Data.js";
import { Pie, Line } from "react-chartjs-2";
import style from "./LineChart.module.scss";
Chart.register(CategoryScale);

// const BarChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: Data.map((data) => data.year),
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: Data.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });

//   return (
//     <div className="App">
//       <p>Using Chart.js in React</p>
//     </div>
//   );
// };
// function PieChart() {
//   const [chartData, setChartData] = useState({
//     labels: Data.map((data) => data.year),
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: Data.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
//       <Pie
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020",
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }
// export default PieChart;

function LineChart({ currentData }) {
  const currentDataKeys = Object.keys(currentData);
  const currentDataValues = Object.values(currentData);
  console.log(
    "currentData prop from BarChart:",
    currentData,
    "Date",
    typeof currentDataKeys[0],
    "Rate",
    typeof +currentDataValues[0]
  );

  const [chartData, setChartData] = useState({
    labels: currentDataKeys.map((i) => i),
    datasets: [
      {
        label: "Bitcoin Rate ",
        data: currentDataValues.map((i) => i),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,1)",
        ],

        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className={style.chartContainer}>
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Bitcoin data 01/08/21 - 31/08/21",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

// const currentData = [
//   { rate: 39882.385, date: 1 },
//   { rate: 39154.7917, date: 2 },
//   { rate: 38198.685, date: 3 },
//   { rate: 39742.4433, date: 4 },
//   { rate: 40887.41, date: 5 },
// ];

// function LineChart() {
//   //   const currentDataKeys = Object.keys(currentData);
//   //   const currentDataValues = Object.values(currentData);
//   //   console.log(
//   //     "currentData prop from BarChart:",
//   //     currentData,
//   //     "Date",
//   //     currentDataKeys[0],
//   //     "Rate",
//   //     currentDataValues[0]
//   //   );

//   const [chartData, setChartData] = useState({
//     labels: currentData.map((i) => i.date),
//     datasets: [
//       {
//         label: "Bitcoin Rate ",
//         data: currentData.map((i) => i.rate),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],

//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Bitcoin data 01/08/21 - 31/08/21",
//             },
//             legend: {
//               display: false,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }
export default LineChart;