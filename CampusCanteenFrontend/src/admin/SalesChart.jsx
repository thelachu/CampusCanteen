import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SalesChart({ data }) {
  return (
    <div className="dashboard-card sales-card">
      <div className="card-heading">
        <div>
          <span>Revenue Overview</span>
          <h2>Weekly Sales</h2>
        </div>
        <select>
          <option>This Week</option>
        </select>
        <select>
          <option>This Month</option>
        </select>
      </div>

      <div className="chart-container">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#ef7d22"
              fillOpacity={0.12}></Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
