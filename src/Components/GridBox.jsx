import React from "react";
import { Chart as ChartJS, layouts } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { TaskCard } from "./index";

function GridBox() {
  return (
    <div className="w-11/12 mr-5 p-6 rounded-2xl bg-gray-100 grid grid-cols-3 gap-4">
      <div className="col-span-2 gap-4 flex flex-col w-full rounded-2xl p-4 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Activity</h1>
          <span className="flex items-center gap-2 bg-gray-200 rounded-full pe-2">
            <span className="bg-black text-white rounded-full py-1 px-2 cursor-pointer hover:bg-gray-700">Week</span>
            <span>Month</span>
          </span>
        </div>
        <Bar
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: "transparent",
                },
              },
              y: {
                grid: {
                  color: "transparent",
                },
                display: false,
              },
            },
          }}
          data={{
            labels: ["02.08", "03.08", "04.08", "05.08", "06.08", "07.08", "08.08"],
            datasets: [
              {
                label: "Hours",
                data: [4, 6, 9, 0, 3, 2, 0],
                borderColor: ["#D4C7FC"],
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: function (context) {
                  return context.dataset.data[context.dataIndex] === Math.max(...context.dataset.data) ? "#8B5CF6" : "#D4C7FC";
                },
              },
            ],
          }}
        />
      </div>
      <div className="row-span-2 gap-8 bg-white rounded-2xl p-3 flex flex-col justify-start items-center">
        <span className="flex justify-between items-center w-full gap-4 rounded-2xl">
          <h1 className="text-3xl font-semibold">Task board</h1>
          <button className="bg-black text-white rounded-full py-1 px-2 cursor-pointer hover:bg-gray-700">All task</button>
        </span>
        <TaskCard title="EduPath" tagName="Design" description="Platform for online learning and professional development." log="13h : 20m" tagColor="bg-[#6AC288]" />
        <TaskCard title="GreenMarket" tagName="Concept" description="Eco-freindly online grocery and household goods store." log="8h : 20m" tagColor="bg-[#6A36FA]" />
        <TaskCard title="GreenMarket" tagName="Re-design" description="A social networks For travellers to share stories and plan trips." log="80h : 40m" tagColor="bg-[#EC8341]" />
        <TaskCard title="HoseHolding" tagName="Funds" description="A social networks For travellers to share stories and plan trips." log="50h : 45m" tagColor="bg-gray-800" />
      </div>
      <div className="col-span-2 gap-4 flex flex-col w-full rounded-2xl p-4 bg-white">
        <h1 className="text-3xl font-semibold">My schedule</h1>
        <Bar
          options={{
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: "transparent",
                },
                display: false,
              },
              y: {
                grid: {
                  color: "transparent",
                },
              },
            },
          }}
          data={{
            labels: ["02.08", "03.08", "04.08", "05.08", "06.08", "07.08", "08.08"],
            datasets: [
              {
                label: "Hours",
                data: [4, 6, 9, 0, 3, 2, 0],
                borderColor: ["#D4C7FC"],
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: function (context) {
                  return context.dataset.data[context.dataIndex] === Math.max(...context.dataset.data) ? "#8B5CF6" : "#D4C7FC";
                },
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default GridBox;
