import React, { useState, useEffect, useCallback, useRef } from 'react';

const IoTRealTimeIntegration = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [devices, setDevices] = useState([]);
  const [realTimeData, setRealTimeData] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [dataStream, setDataStream] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const intervalRef = useRef(null);

  // Initialize IoT devices
  const initializeDevices = useCallback(() => {
    const deviceList = [
      {
        id: 'turbine-01',
        name: 'Wind Turbine #1',
        type: 'turbine',
        location: 'Tower A',
        status: 'online',
        lastUpdate: Date.now(),
        sensors: ['vibration', 'temperature', 'rotation_speed', 'power_output']
      },
      {
        id: 'generator-01',
        name: 'Generator Unit #1',
        type: 'generator',
        location: 'Power House',
        status: 'online',
        lastUpdate: Date.now(),
        sensors: ['voltage', 'current', 'frequency', 'temperature']
      },
      {
        id: 'transformer-01',
        name: 'Main Transformer',
        type: 'transformer',
        location: 'Substation',
        status: 'online',
        lastUpdate: Date.now(),
        sensors: ['oil_temperature', 'load_current', 'tap_position']
      },
      {
        id: 'weather-01',
        name: 'Weather Station',
        type: 'weather',
        location: 'Site Perimeter',
        status: 'online',
        lastUpdate: Date.now(),
        sensors: ['wind_speed', 'wind_direction', 'temperature', 'humidity', 'pressure']
      },
      {
        id: 'control-01',
        name: 'Central Control Unit',
        type: 'control',
        location: 'Control Room',
        status: 'online',
        lastUpdate: Date.now(),
        sensors: ['system_load', 'grid_frequency', 'power_factor']
      }
    ];

    setDevices(deviceList);
    setSelectedDevice(deviceList[0]);
  }, []);

  // Simulate real-time data generation
  const generateRealTimeData = useCallback(() => {
    const newData = {};
    const newAlerts = [];
    const timestamp = Date.now();

    devices.forEach(device => {
      const deviceData = {};
      
      device.sensors.forEach(sensor => {
        let value, unit, status = 'normal';
        
        // Generate realistic sensor data based on type
        switch (sensor) {
          case 'vibration':
            value = 0.15 + Math.random() * 0.1;
            unit = 'mm/s';
            if (value > 0.22) status = 'warning';
            if (value > 0.25) status = 'critical';
            break;
          case 'temperature':
            value = 65 + Math.random() * 10;
            unit = '°C';
            if (value > 72) status = 'warning';
            if (value > 75) status = 'critical';
            break;
          case 'rotation_speed':
            value = 1800 + Math.random() * 100;
            unit = 'RPM';
            if (value > 1950) status = 'warning';
            break;
          case 'power_output':
            value = 2.2 + Math.random() * 0.6;
            unit = 'MW';
            break;
          case 'voltage':
            value = 13800 + (Math.random() - 0.5) * 500;
            unit = 'V';
            if (Math.abs(value - 13800) > 300) status = 'warning';
            break;
          case 'current':
            value = 95 + Math.random() * 10;
            unit = 'A';
            if (value > 102) status = 'warning';
            break;
          case 'frequency':
            value = 50 + (Math.random() - 0.5) * 0.2;
            unit = 'Hz';
            if (Math.abs(value - 50) > 0.1) status = 'warning';
            break;
          case 'oil_temperature':
            value = 45 + Math.random() * 15;
            unit = '°C';
            if (value > 55) status = 'warning';
            break;
          case 'load_current':
            value = 150 + Math.random() * 50;
            unit = 'A';
            break;
          case 'tap_position':
            value = Math.floor(Math.random() * 17) - 8;
            unit = '';
            break;
          case 'wind_speed':
            value = 8 + Math.random() * 4;
            unit = 'm/s';
            break;
          case 'wind_direction':
            value = Math.floor(Math.random() * 360);
            unit = '°';
            break;
          case 'humidity':
            value = 60 + Math.random() * 30;
            unit = '%';
            break;
          case 'pressure':
            value = 1013 + (Math.random() - 0.5) * 20;
            unit = 'hPa';
            break;
          case 'system_load':
            value = 85 + Math.random() * 10;
            unit = '%';
            if (value > 92) status = 'warning';
            break;
          case 'grid_frequency':
            value = 50 + (Math.random() - 0.5) * 0.15;
            unit = 'Hz';
            break;
          case 'power_factor':
            value = 0.95 + Math.random() * 0.04;
            unit = '';
            break;
          default:
            value = Math.random() * 100;
            unit = '';
        }

        deviceData[sensor] = {
          value: parseFloat(value.toFixed(3)),
          unit,
          status,
          timestamp
        };

        // Generate alerts for critical values
        if (status === 'critical' || status === 'warning') {
          newAlerts.push({
            id: `${device.id}-${sensor}-${timestamp}`,
            deviceId: device.id,
            deviceName: device.name,
            sensor,
            value,
            unit,
            status,
            timestamp,
            message: `${sensor.replace('_', ' ')} ${status} threshold exceeded`
          });
        }
      });

      newData[device.id] = deviceData;
    });

    setRealTimeData(newData);
    
    // Update alerts (keep only recent ones)
    setAlerts(prev => {
      const combined = [...prev, ...newAlerts];
      return combined
        .filter(alert => timestamp - alert.timestamp < 300000) // Keep 5 minutes
        .slice(-20); // Keep max 20 alerts
    });

    // Update data stream for visualization
    setDataStream(prev => {
      const newStream = [...prev, { timestamp, data: newData }];
      return newStream.slice(-100); // Keep last 100 data points
    });

  }, [devices]);

  // WebSocket simulation
  const connectWebSocket = useCallback(() => {
    // Simulate WebSocket connection
    setIsConnected(true);
    
    // Start data generation interval
    intervalRef.current = setInterval(generateRealTimeData, 2000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [generateRealTimeData]);

  const disconnectWebSocket = useCallback(() => {
    setIsConnected(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    initializeDevices();
  }, [initializeDevices]);

  useEffect(() => {
    if (devices.length > 0) {
      connectWebSocket();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [devices, connectWebSocket]);

  const getDeviceIcon = (type) => {
    const icons = {
      turbine: '🌪️',
      generator: '⚡',
      transformer: '🔌',
      weather: '🌤️',
      control: '🎛️'
    };
    return icons[type] || '📡';
  };

  const getStatusColor = (status) => {
    const colors = {
      online: 'var(--status-success)',
      offline: 'var(--status-error)',
      warning: 'var(--energy-orange)',
      critical: 'var(--status-error)',
      normal: 'var(--status-success)'
    };
    return colors[status] || 'var(--text-muted)';
  };

  const formatSensorName = (sensor) => {
    return sensor.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatValue = (value, unit) => {
    if (typeof value === 'number') {
      return `${value.toFixed(unit === 'Hz' ? 3 : unit === '°' ? 0 : 2)}${unit ? ` ${unit}` : ''}`;
    }
    return `${value}${unit ? ` ${unit}` : ''}`;
  };

  return (
    <div className="iot-realtime-integration">
      <div className="iot-header">
        <div className="header-content">
          <h2>🌐 IoT Real-Time Integration</h2>
          <p>Live sensor data and device monitoring</p>
        </div>
        
        <div className="connection-status">
          <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
            <div className="status-dot"></div>
            <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
          </div>
          
          <div className="connection-controls">
            {isConnected ? (
              <button onClick={disconnectWebSocket} className="disconnect-btn">
                🔌 Disconnect
              </button>
            ) : (
              <button onClick={connectWebSocket} className="connect-btn">
                🔗 Connect
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="iot-content">
        {/* Device Overview */}
        <div className="devices-overview">
          <h3>📱 Connected Devices</h3>
          <div className="devices-grid">
            {devices.map(device => (
              <div 
                key={device.id}
                className={`device-card ${selectedDevice?.id === device.id ? 'selected' : ''}`}
                onClick={() => setSelectedDevice(device)}
              >
                <div className="device-header">
                  <span className="device-icon">{getDeviceIcon(device.type)}</span>
                  <div className="device-info">
                    <h4>{device.name}</h4>
                    <p>{device.location}</p>
                  </div>
                  <div 
                    className="device-status"
                    style={{ color: getStatusColor(device.status) }}
                  >
                    ●
                  </div>
                </div>
                
                <div className="device-metrics">
                  <div className="metric">
                    <span className="metric-label">Sensors:</span>
                    <span className="metric-value">{device.sensors.length}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Last Update:</span>
                    <span className="metric-value">
                      {new Date(device.lastUpdate).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Data Display */}
        {selectedDevice && (
          <div className="realtime-data">
            <h3>📊 Real-Time Sensor Data - {selectedDevice.name}</h3>
            <div className="sensors-grid">
              {selectedDevice.sensors.map(sensor => {
                const sensorData = realTimeData[selectedDevice.id]?.[sensor];
                return (
                  <div key={sensor} className="sensor-card">
                    <div className="sensor-header">
                      <h4>{formatSensorName(sensor)}</h4>
                      {sensorData && (
                        <div 
                          className="sensor-status"
                          style={{ color: getStatusColor(sensorData.status) }}
                        >
                          ●
                        </div>
                      )}
                    </div>
                    
                    {sensorData ? (
                      <div className="sensor-data">
                        <div className="sensor-value">
                          {formatValue(sensorData.value, sensorData.unit)}
                        </div>
                        <div className="sensor-timestamp">
                          {new Date(sensorData.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    ) : (
                      <div className="sensor-loading">
                        <div className="loading-pulse"></div>
                        <span>Waiting for data...</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Data Stream Visualization */}
        <div className="data-stream">
          <h3>📈 Live Data Stream</h3>
          <div className="stream-container">
            <DataStreamChart data={dataStream} selectedDevice={selectedDevice} />
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="alerts-panel">
          <h3>🚨 Real-Time Alerts</h3>
          <div className="alerts-container">
            {alerts.length === 0 ? (
              <div className="no-alerts">
                <span className="no-alerts-icon">✅</span>
                <p>All systems operating normally</p>
              </div>
            ) : (
              <div className="alerts-list">
                {alerts.slice().reverse().map(alert => (
                  <div 
                    key={alert.id} 
                    className={`alert-item ${alert.status}`}
                  >
                    <div className="alert-header">
                      <span className="alert-icon">
                        {alert.status === 'critical' ? '🔴' : '🟡'}
                      </span>
                      <div className="alert-info">
                        <h4>{alert.deviceName}</h4>
                        <p>{alert.message}</p>
                      </div>
                      <div className="alert-timestamp">
                        {new Date(alert.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="alert-details">
                      <span className="alert-sensor">{formatSensorName(alert.sensor)}:</span>
                      <span className="alert-value">
                        {formatValue(alert.value, alert.unit)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* System Statistics */}
        <div className="system-stats">
          <h3>📊 System Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{devices.filter(d => d.status === 'online').length}</div>
              <div className="stat-label">Devices Online</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{devices.reduce((sum, d) => sum + d.sensors.length, 0)}</div>
              <div className="stat-label">Active Sensors</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{alerts.filter(a => a.status === 'critical').length}</div>
              <div className="stat-label">Critical Alerts</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{dataStream.length > 0 ? '2.1s' : 'N/A'}</div>
              <div className="stat-label">Update Interval</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .iot-realtime-integration {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-subtle);
        }

        .iot-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .header-content h2 {
          margin: 0 0 var(--space-2) 0;
          color: var(--text-primary);
          font-size: 1.75rem;
          font-weight: 700;
        }

        .header-content p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .connection-status {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .status-indicator.connected {
          color: var(--status-success);
        }

        .status-indicator.disconnected {
          color: var(--status-error);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse 2s ease-in-out infinite;
        }

        .connect-btn,
        .disconnect-btn {
          background: var(--energy-orange);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-4);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .disconnect-btn {
          background: var(--status-error);
        }

        .connect-btn:hover,
        .disconnect-btn:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .iot-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .devices-overview h3,
        .realtime-data h3,
        .data-stream h3,
        .alerts-panel h3,
        .system-stats h3 {
          margin: 0 0 var(--space-4) 0;
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
        }

        .devices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-4);
        }

        .device-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border: 2px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .device-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .device-card.selected {
          border-color: var(--energy-orange);
          background: var(--surface-elevated);
        }

        .device-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        .device-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .device-info h4 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .device-info p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .device-status {
          margin-left: auto;
          font-size: 1.5rem;
        }

        .device-metrics {
          display: flex;
          justify-content: space-between;
          gap: var(--space-2);
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .metric-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .metric-value {
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .sensors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .sensor-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border: 1px solid var(--border-subtle);
        }

        .sensor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
        }

        .sensor-header h4 {
          margin: 0;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .sensor-status {
          font-size: 1rem;
        }

        .sensor-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--energy-orange);
          margin-bottom: var(--space-2);
        }

        .sensor-timestamp {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .sensor-loading {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--text-muted);
        }

        .loading-pulse {
          width: 12px;
          height: 12px;
          background: var(--energy-orange);
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .stream-container {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          height: 300px;
          border: 1px solid var(--border-subtle);
        }

        .alerts-container {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid var(--border-subtle);
        }

        .no-alerts {
          text-align: center;
          padding: var(--space-6);
          color: var(--text-muted);
        }

        .no-alerts-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: var(--space-2);
        }

        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .alert-item {
          background: var(--surface-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-3);
          border-left: 4px solid var(--border-base);
        }

        .alert-item.warning {
          border-left-color: var(--energy-orange);
        }

        .alert-item.critical {
          border-left-color: var(--status-error);
        }

        .alert-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-2);
        }

        .alert-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .alert-info h4 {
          margin: 0;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .alert-info p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .alert-timestamp {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .alert-details {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .alert-sensor {
          color: var(--text-muted);
        }

        .alert-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-4);
        }

        .stat-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          border: 1px solid var(--border-subtle);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--energy-orange);
          margin-bottom: var(--space-2);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .iot-header {
            flex-direction: column;
            align-items: stretch;
          }

          .connection-status {
            justify-content: space-between;
          }

          .devices-grid,
          .sensors-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

// Data Stream Chart Component
const DataStreamChart = ({ data, selectedDevice }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (!data || !selectedDevice || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, width, height);
    
    if (data.length === 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '16px var(--font-sans)';
      ctx.textAlign = 'center';
      ctx.fillText('Waiting for real-time data...', width / 2, height / 2);
      return;
    }

    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Get the first sensor for visualization
    const firstSensor = selectedDevice.sensors[0];
    const sensorData = data.map(point => ({
      timestamp: point.timestamp,
      value: point.data[selectedDevice.id]?.[firstSensor]?.value || 0
    })).filter(point => point.value !== undefined);

    if (sensorData.length < 2) return;

    const minTime = Math.min(...sensorData.map(d => d.timestamp));
    const maxTime = Math.max(...sensorData.map(d => d.timestamp));
    const minValue = Math.min(...sensorData.map(d => d.value));
    const maxValue = Math.max(...sensorData.map(d => d.value));
    
    const timeRange = maxTime - minTime;
    const valueRange = maxValue - minValue || 1;
    
    const xPos = (timestamp) => padding + ((timestamp - minTime) / timeRange) * chartWidth;
    const yPos = (value) => padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
      const x = padding + (i / 5) * chartWidth;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
      
      const y = padding + (i / 5) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
    
    // Draw data line
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    sensorData.forEach((point, index) => {
      const x = xPos(point.timestamp);
      const y = yPos(point.value);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#00ff88';
    sensorData.forEach(point => {
      const x = xPos(point.timestamp);
      const y = yPos(point.value);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px var(--font-mono)';
    ctx.textAlign = 'center';
    
    // Sensor name
    ctx.fillText(
      firstSensor.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      width / 2,
      25
    );

  }, [data, selectedDevice]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default IoTRealTimeIntegration;
