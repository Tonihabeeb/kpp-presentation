import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const data = [
  { name: 'Jan', output: 50, efficiency: 75 },
  { name: 'Feb', output: 60, efficiency: 80 },
  { name: 'Mar', output: 55, efficiency: 78 },
  { name: 'Apr', output: 65, efficiency: 82 },
  { name: 'May', output: 70, efficiency: 85 },
  { name: 'Jun', output: 68, efficiency: 84 },
  { name: 'Jul', output: 75, efficiency: 87 },
  { name: 'Aug', output: 72, efficiency: 86 },
  { name: 'Sep', output: 78, efficiency: 88 },
  { name: 'Oct', output: 80, efficiency: 90 },
  { name: 'Nov', output: 77, efficiency: 89 },
  { name: 'Dec', output: 82, efficiency: 91 },
];

export default function PerformanceChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show a loading placeholder during SSR and hydration
  if (!isClient) {
    return (
      <div style={{ 
        width: '100%', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f8f9fa',
        borderRadius: '8px',
        color: '#64748b'
      }}>
        Loading chart...
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          aria-label="KPP Performance Data Chart"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            stroke="#64748b"
            fontSize={12}
          />
          <YAxis 
            yAxisId="left" 
            stroke="#3b82f6"
            fontSize={12}
            label={{ value: 'Output (kW)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#10b981"
            fontSize={12}
            label={{ value: 'Efficiency (%)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle' } }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #e2e8f0', 
              borderRadius: '8px',
              fontSize: '14px'
            }}
            labelStyle={{ color: '#1e293b' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="output" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#3b82f6' }}
            activeDot={{ r: 6, fill: '#1d4ed8' }} 
            name="Power Output (kW)"
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="efficiency" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#10b981' }}
            activeDot={{ r: 6, fill: '#059669' }}
            name="Efficiency (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
