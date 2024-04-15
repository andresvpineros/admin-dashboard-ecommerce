"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./Chart.module.css";

const data = [
  {
    name: "Dom",
    Pedidos: 15,
    Clientes: 5,
  },
  {
    name: "Lun",
    Pedidos: 34,
    Clientes: 10,
  },
  {
    name: "Mar",
    Pedidos: 12,
    Clientes: 2,
  },
  {
    name: "Mie",
    Pedidos: 25,
    Clientes: 3,
  },
  {
    name: "Jue",
    Pedidos: 32,
    Clientes: 5,
  },
  {
    name: "Vie",
    Pedidos: 45,
    Clientes: 22,
  },
  {
    name: "Sab",
    Pedidos: 38,
    Clientes: 10,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resumen Semanal</h2>
      <ResponsiveContainer width="100%" height="90%">
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
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Pedidos"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="Clientes"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
