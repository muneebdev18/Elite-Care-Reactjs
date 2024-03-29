import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import Styles from './Style.module.css'

const Chart = () => {
    const data = [
        {
          name: "Mon",
          visit: 2000,
          click: 3000,
        },
        {
          name: "Tues",
          visit: 1900,
          click: 3000,
        },
        {
          name: "Wed",
          visit: 2010,
          click: 3000,
        },
        {
          name: "Thurs",
          visit: 2020,
          click: 3000,
        },
        {
          name: "Fri",
          visit: 1940,
          click: 2400,
        },
        {
          name: "Sat",
          visit: 1600,
          click: 5000,
        },
        {
          name: "Sun",
          visit: 2019,
          click: 2000,
        },
      ];
  return (
    <div className={Styles.maindiv}>
    <h2 className={Styles.title}>Weekly Recap</h2>
    <ResponsiveContainer className={Styles.charts} width="100%" height="90%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ background: '#151c2c', border :" none" }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="visit"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="click" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chart