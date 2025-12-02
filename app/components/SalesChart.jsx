import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SalesChart = ({ totalSales }) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={totalSales}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="totalSale"
            stroke="purple"
            strokeWidth={2}
            name="Total Sales"
          />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend align="right" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SalesChart;
