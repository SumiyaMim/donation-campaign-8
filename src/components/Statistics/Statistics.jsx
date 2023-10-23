import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const totalDonation = useLoaderData();
  const donateItems = JSON.parse(localStorage.getItem("donation"));
  const myDonation = donateItems ? donateItems.length : 0;
  
  const percentageMyDonation = ((myDonation / totalDonation.length) * 100).toFixed(1);
  const percentageTotalDonation = ((totalDonation.length / totalDonation.length) * 100).toFixed(1);
  const percentageDifference = (percentageTotalDonation - percentageMyDonation).toFixed(1);

  const data = [
    { name: "Your Donation", value: parseFloat(percentageMyDonation) },
    { name: "Total Donation", value: parseFloat(percentageDifference) },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const labelStyle = {
    fontWeight: "bold",
  };

  const legendStyle = {
    left: "6%",
  };

  return (
    <div className="flex justify-center items-center py-8 px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto"> 
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="middle"
                style={labelStyle}
              >
                {`${(percent * 100).toFixed(1)}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          iconSize={60}
          iconType="plainline"
          formatter={(value, entry) => 
            <span style={{ color: 'black', fontSize: '14px', fontWeight: '500', marginRight: "20px" }}>{value}</span>
          }
        wrapperStyle={legendStyle}
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
