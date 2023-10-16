import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  //   YAxis,
  Tooltip,
  //   Legend,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";

function RechartBarChart() {
  const data = [
    { month: "Jan", sales: 20, isActive: false, color: "green" },
    { month: "Feb", sales: 30, isActive: false, color: "green" },
    { month: "Mar", sales: 40, isActive: false, color: "green" },
    { month: "April", sales: 50, isActive: false, color: "green" },
    { month: "May", sales: 60, isActive: false, color: "green" },
    { month: "June", sales: 70, isActive: false, color: "green" },
    { month: "Jul", sales: 20, isActive: false, color: "green" },
    { month: "Aug", sales: 30, isActive: false, color: "green" },
    { month: "Sept", sales: 40, isActive: false, color: "green" },
    { month: "Oct", sales: 50, isActive: true, color: "blue" },
    { month: "Nov", sales: 60, isActive: false, color: "green" },
    { month: "Dec", sales: 70, isActive: false, color: "green" },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" stroke="red" />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="sales">
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.month}`} fill={`${entry.color}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RechartBarChart;
