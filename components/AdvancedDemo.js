import { useLoadingState, useToast } from '../hooks/useAdvancedInteractions';
import { useState } from 'react';

export default function AdvancedDemo() {
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const { addToast } = useToast();
  const [demoData, setDemoData] = useState(null);

  const handleDataFetch = async () => {
    startLoading();
    
    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockData = {
        title: "KPP Performance Data",
        metrics: [
          { label: "Power Output", value: "100kW", trend: "+15%" },
          { label: "Efficiency", value: "95.2%", trend: "+2.1%" },
          { label: "Uptime", value: "99.8%", trend: "+0.3%" }
        ],
        timestamp: new Date().toISOString()
      };
      
      setDemoData(mockData);
      
      addToast({
        type: 'success',
        title: 'Data Loaded Successfully',
        message: 'Latest performance metrics have been retrieved.',
        duration: 3000
      });
      
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Failed to Load Data',
        message: 'Please check your connection and try again.',
        duration: 4000
      });
    } finally {
      stopLoading();
    }
  };

  const handleClearData = () => {
    setDemoData(null);
    addToast({
      type: 'info',
      title: 'Data Cleared',
      message: 'Performance data has been cleared from view.',
      duration: 2000
    });
  };

  return (
    <div className="advanced-demo-container">
      <div className="demo-header">
        <h2>Advanced Interactions Demo</h2>
        <p>Experience our enhanced loading states, notifications, and data visualization</p>
      </div>
      
      <div className="demo-controls">
        <button
          onClick={handleDataFetch}
          disabled={isLoading}
          className={`demo-button primary ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? (
            <>
              <span className="button-spinner"></span>
              Loading Data...
            </>
          ) : (
            <>
              <span className="button-icon">📊</span>
              Fetch Performance Data
            </>
          )}
        </button>
        
        {demoData && (
          <button
            onClick={handleClearData}
            className="demo-button secondary"
          >
            <span className="button-icon">🗑️</span>
            Clear Data
          </button>
        )}
      </div>
      
      {demoData && (
        <div className="demo-data-display">
          <div className="data-header">
            <h3>{demoData.title}</h3>
            <span className="data-timestamp">
              Last updated: {new Date(demoData.timestamp).toLocaleTimeString()}
            </span>
          </div>
          
          <div className="metrics-grid">
            {demoData.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className={`metric-trend ${metric.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="demo-info">
        <h4>Phase 5 Features Demonstrated:</h4>
        <ul>
          <li>✅ Advanced loading states with spinners</li>
          <li>✅ Toast notification system</li>
          <li>✅ Smooth data transitions</li>
          <li>✅ Interactive feedback</li>
          <li>✅ Premium micro-interactions</li>
        </ul>
      </div>
    </div>
  );
}
