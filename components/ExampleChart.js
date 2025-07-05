import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Sample data for KPP performance metrics
const performanceData = [
  { month: 'Jan', efficiency: 85, output: 120, cost: 45 },
  { month: 'Feb', efficiency: 88, output: 135, cost: 42 },
  { month: 'Mar', efficiency: 92, output: 150, cost: 38 },
  { month: 'Apr', efficiency: 89, output: 140, cost: 41 },
  { month: 'May', efficiency: 95, output: 165, cost: 35 },
  { month: 'Jun', efficiency: 91, output: 155, cost: 39 },
];

const energyDistribution = [
  { name: 'Kinetic Energy', value: 45, color: '#8884d8' },
  { name: 'Thermal Energy', value: 25, color: '#82ca9d' },
  { name: 'Electrical Output', value: 30, color: '#ffc658' },
];

export default function ExampleChart({ type = 'line', data = performanceData, title = 'KPP Performance Metrics' }) {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="efficiency" stroke="#8884d8" name="Efficiency (%)" />
            <Line type="monotone" dataKey="output" stroke="#82ca9d" name="Output (MW)" />
            <Line type="monotone" dataKey="cost" stroke="#ffc658" name="Cost ($/MWh)" />
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="efficiency" fill="#8884d8" name="Efficiency (%)" />
            <Bar dataKey="output" fill="#82ca9d" name="Output (MW)" />
            <Bar dataKey="cost" fill="#ffc658" name="Cost ($/MWh)" />
          </BarChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={energyDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {energyDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      
      default:
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="efficiency" stroke="#8884d8" name="Efficiency (%)" />
          </LineChart>
        );
    }
  };

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
} 