import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Sector } from "recharts";

const data = [
  {
    name: "Group A",
    innerRadius: 60,
    outerRadius: 80,
    value: 1,
    color: "green",
  },
  {
    name: "Group B",
    innerRadius: 50,
    outerRadius: 50,
    value: 3,
    color: "gray",
  },
  {
    name: "Group C",
    innerRadius: 60,
    outerRadius: 80,
    value: 6,
    color: "blue",
  },
];

const CustomActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={16}
        fontWeight="bold"
      >
        {payload.value * 10}%
      </text>
      <text x={cx} y={cy} dy={8} fontSize={10} textAnchor="middle" fill={fill}>
        Total new customers
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const RechartsPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={CustomActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={handlePieEnter}
        >
          {data.map((entry) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={entry.color}
              innerRadius={entry.innerRadius}
              outerRadius={entry.outerRadius}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RechartsPieChart;
