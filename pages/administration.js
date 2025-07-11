import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

export default function Administration() {
  const [activeSection, setActiveSection] = useState('system');
  const [systemStatus, setSystemStatus] = useState({});
  const [userManagement, setUserManagement] = useState([]);
  const [securitySettings, setSecuritySettings] = useState({});
  const [maintenanceSchedule, setMaintenanceSchedule] = useState([]);
  const [systemLogs, setSystemLogs] = useState([]);

  // Initialize admin data
  useEffect(() => {
    const initializeAdminData = () => {
      setSystemStatus({
        uptime: '99.94%',
        lastRestart: '2025-07-03 14:32:15',
        cpuUsage: 23.4,
        memoryUsage: 67.8,
        diskUsage: 45.2,
        networkStatus: 'healthy',
        databaseStatus: 'connected',
        backupStatus: 'completed',
        lastBackup: '2025-07-10 02:00:00'
      });

      setUserManagement([
        {
          id: 1,
          username: 'admin@kpp.com',
          name: 'System Administrator',
          role: 'Admin',
          lastLogin: '2025-07-10 09:15:23',
          status: 'active',
          permissions: ['full_access', 'user_management', 'system_config']
        },
        {
          id: 2,
          username: 'operator@kpp.com',
          name: 'Control Room Operator',
          role: 'Operator',
          lastLogin: '2025-07-10 08:45:12',
          status: 'active',
          permissions: ['monitoring', 'alerts', 'reports']
        },
        {
          id: 3,
          username: 'engineer@kpp.com',
          name: 'Maintenance Engineer',
          role: 'Engineer',
          lastLogin: '2025-07-09 16:30:45',
          status: 'active',
          permissions: ['maintenance', 'diagnostics', 'reports']
        },
        {
          id: 4,
          username: 'analyst@kpp.com',
          name: 'Performance Analyst',
          role: 'Analyst',
          lastLogin: '2025-07-08 11:20:33',
          status: 'inactive',
          permissions: ['analytics', 'reports', 'export']
        }
      ]);

      setSecuritySettings({
        encryptionStatus: 'AES-256 Enabled',
        authenticationMethod: 'Multi-Factor',
        sessionTimeout: '30 minutes',
        failedLoginAttempts: 3,
        passwordPolicy: 'Strong',
        firewallStatus: 'Active',
        sslCertificate: 'Valid until 2026-07-10',
        intrusionDetection: 'Enabled'
      });

      setMaintenanceSchedule([
        {
          id: 1,
          task: 'Turbine Blade Inspection',
          type: 'Preventive',
          scheduled: '2025-07-15 10:00:00',
          duration: '4 hours',
          priority: 'high',
          assignedTo: 'Maintenance Team A',
          status: 'scheduled'
        },
        {
          id: 2,
          task: 'Generator Lubrication',
          type: 'Routine',
          scheduled: '2025-07-18 14:00:00',
          duration: '2 hours',
          priority: 'medium',
          assignedTo: 'Maintenance Team B',
          status: 'scheduled'
        },
        {
          id: 3,
          task: 'Control System Update',
          type: 'Software',
          scheduled: '2025-07-12 02:00:00',
          duration: '6 hours',
          priority: 'critical',
          assignedTo: 'IT Team',
          status: 'pending'
        },
        {
          id: 4,
          task: 'Vibration Analysis',
          type: 'Diagnostic',
          scheduled: '2025-07-20 09:00:00',
          duration: '3 hours',
          priority: 'low',
          assignedTo: 'Engineering Team',
          status: 'scheduled'
        }
      ]);

      setSystemLogs([
        {
          id: 1,
          timestamp: '2025-07-10 09:45:23',
          level: 'INFO',
          module: 'Authentication',
          message: 'User admin@kpp.com logged in successfully',
          source: 'Web Interface'
        },
        {
          id: 2,
          timestamp: '2025-07-10 09:32:11',
          level: 'WARNING',
          module: 'Turbine Control',
          message: 'Wind speed approaching high threshold (18.5 m/s)',
          source: 'Sensor Network'
        },
        {
          id: 3,
          timestamp: '2025-07-10 09:15:08',
          level: 'ERROR',
          module: 'Data Collection',
          message: 'Sensor T-04 communication timeout',
          source: 'IoT Gateway'
        },
        {
          id: 4,
          timestamp: '2025-07-10 08:47:33',
          level: 'INFO',
          module: 'Backup System',
          message: 'Database backup completed successfully',
          source: 'Backup Service'
        },
        {
          id: 5,
          timestamp: '2025-07-10 08:30:15',
          level: 'INFO',
          module: 'Performance Monitor',
          message: 'Daily performance report generated',
          source: 'Analytics Engine'
        }
      ]);
    };

    initializeAdminData();
  }, []);

  const sections = [
    { id: 'system', label: '🖥️ System Status', icon: '🖥️' },
    { id: 'users', label: '👥 User Management', icon: '👥' },
    { id: 'security', label: '🔒 Security', icon: '🔒' },
    { id: 'maintenance', label: '🔧 Maintenance', icon: '🔧' },
    { id: 'logs', label: '📋 System Logs', icon: '📋' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      healthy: 'var(--status-success)',
      connected: 'var(--status-success)',
      completed: 'var(--status-success)',
      active: 'var(--status-success)',
      inactive: 'var(--text-muted)',
      warning: 'var(--energy-orange)',
      error: 'var(--status-error)',
      critical: 'var(--status-error)',
      high: 'var(--status-error)',
      medium: 'var(--energy-orange)',
      low: 'var(--status-success)',
      scheduled: 'var(--energy-blue)',
      pending: 'var(--energy-orange)'
    };
    return colors[status] || 'var(--text-muted)';
  };

  const getLogLevelColor = (level) => {
    const colors = {
      INFO: 'var(--status-success)',
      WARNING: 'var(--energy-orange)',
      ERROR: 'var(--status-error)',
      DEBUG: 'var(--text-muted)'
    };
    return colors[level] || 'var(--text-muted)';
  };

  const renderSystemStatus = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>🖥️ System Status Overview</h2>
        <p>Monitor system health and performance metrics</p>
      </div>

      <div className="status-grid">
        <div className="status-card">
          <div className="status-header">
            <h3>System Uptime</h3>
            <span className="status-badge success">{systemStatus.uptime}</span>
          </div>
          <div className="status-detail">
            Last Restart: {systemStatus.lastRestart}
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>CPU Usage</h3>
            <span className="status-value">{systemStatus.cpuUsage}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: `${systemStatus.cpuUsage}%`,
                backgroundColor: systemStatus.cpuUsage > 80 ? 'var(--status-error)' : 'var(--status-success)'
              }}
            ></div>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>Memory Usage</h3>
            <span className="status-value">{systemStatus.memoryUsage}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: `${systemStatus.memoryUsage}%`,
                backgroundColor: systemStatus.memoryUsage > 80 ? 'var(--status-error)' : 'var(--energy-orange)'
              }}
            ></div>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>Disk Usage</h3>
            <span className="status-value">{systemStatus.diskUsage}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: `${systemStatus.diskUsage}%`,
                backgroundColor: 'var(--status-success)'
              }}
            ></div>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>Network Status</h3>
            <span 
              className="status-indicator"
              style={{ color: getStatusColor(systemStatus.networkStatus) }}
            >
              ● {systemStatus.networkStatus}
            </span>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>Database</h3>
            <span 
              className="status-indicator"
              style={{ color: getStatusColor(systemStatus.databaseStatus) }}
            >
              ● {systemStatus.databaseStatus}
            </span>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <h3>Backup Status</h3>
            <span 
              className="status-indicator"
              style={{ color: getStatusColor(systemStatus.backupStatus) }}
            >
              ● {systemStatus.backupStatus}
            </span>
          </div>
          <div className="status-detail">
            Last Backup: {systemStatus.lastBackup}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>👥 User Management</h2>
        <p>Manage user accounts, roles, and permissions</p>
        <button className="add-user-btn">➕ Add New User</button>
      </div>

      <div className="users-table">
        <div className="table-header">
          <div>User</div>
          <div>Role</div>
          <div>Last Login</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        
        {userManagement.map(user => (
          <div key={user.id} className="table-row">
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.username}</div>
            </div>
            <div className="user-role">
              <span className="role-badge">{user.role}</span>
            </div>
            <div className="user-login">{user.lastLogin}</div>
            <div className="user-status">
              <span 
                className="status-indicator"
                style={{ color: getStatusColor(user.status) }}
              >
                ● {user.status}
              </span>
            </div>
            <div className="user-actions">
              <button className="action-btn edit">✏️</button>
              <button className="action-btn delete">🗑️</button>
              <button className="action-btn permissions">🔑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>🔒 Security Settings</h2>
        <p>Configure security policies and monitor threats</p>
      </div>

      <div className="security-grid">
        {Object.entries(securitySettings).map(([key, value]) => (
          <div key={key} className="security-card">
            <div className="security-label">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="security-value">{value}</div>
            <button className="security-action">Configure</button>
          </div>
        ))}
      </div>

      <div className="security-alerts">
        <h3>🚨 Security Alerts</h3>
        <div className="alert-item">
          <span className="alert-icon">🟡</span>
          <div className="alert-content">
            <h4>Password Expiry Warning</h4>
            <p>3 user passwords will expire within 7 days</p>
          </div>
          <div className="alert-time">2 hours ago</div>
        </div>
        <div className="alert-item">
          <span className="alert-icon">🟢</span>
          <div className="alert-content">
            <h4>Security Scan Completed</h4>
            <p>No vulnerabilities detected in system scan</p>
          </div>
          <div className="alert-time">6 hours ago</div>
        </div>
      </div>
    </div>
  );

  const renderMaintenance = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>🔧 Maintenance Schedule</h2>
        <p>Plan and track maintenance activities</p>
        <button className="add-maintenance-btn">➕ Schedule Maintenance</button>
      </div>

      <div className="maintenance-calendar">
        {maintenanceSchedule.map(task => (
          <div key={task.id} className={`maintenance-card priority-${task.priority}`}>
            <div className="maintenance-header">
              <h3>{task.task}</h3>
              <span 
                className="priority-badge"
                style={{ backgroundColor: getStatusColor(task.priority) }}
              >
                {task.priority}
              </span>
            </div>
            
            <div className="maintenance-details">
              <div className="detail-row">
                <span className="label">Type:</span>
                <span className="value">{task.type}</span>
              </div>
              <div className="detail-row">
                <span className="label">Scheduled:</span>
                <span className="value">{task.scheduled}</span>
              </div>
              <div className="detail-row">
                <span className="label">Duration:</span>
                <span className="value">{task.duration}</span>
              </div>
              <div className="detail-row">
                <span className="label">Assigned To:</span>
                <span className="value">{task.assignedTo}</span>
              </div>
            </div>
            
            <div className="maintenance-status">
              <span 
                className="status-indicator"
                style={{ color: getStatusColor(task.status) }}
              >
                ● {task.status}
              </span>
            </div>
            
            <div className="maintenance-actions">
              <button className="action-btn">Edit</button>
              <button className="action-btn">Reschedule</button>
              <button className="action-btn">Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSystemLogs = () => (
    <div className="admin-section">
      <div className="section-header">
        <h2>📋 System Logs</h2>
        <p>Monitor system events and troubleshoot issues</p>
        <div className="log-controls">
          <select className="log-filter">
            <option value="all">All Levels</option>
            <option value="error">Errors Only</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
          </select>
          <button className="refresh-logs">🔄 Refresh</button>
        </div>
      </div>

      <div className="logs-container">
        {systemLogs.map(log => (
          <div key={log.id} className="log-entry">
            <div className="log-timestamp">{log.timestamp}</div>
            <div 
              className="log-level"
              style={{ color: getLogLevelColor(log.level) }}
            >
              {log.level}
            </div>
            <div className="log-module">{log.module}</div>
            <div className="log-message">{log.message}</div>
            <div className="log-source">{log.source}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'system':
        return renderSystemStatus();
      case 'users':
        return renderUserManagement();
      case 'security':
        return renderSecurity();
      case 'maintenance':
        return renderMaintenance();
      case 'logs':
        return renderSystemLogs();
      default:
        return renderSystemStatus();
    }
  };

  return (
    <div className="administration-page">
      <NavBar />
      
      <main className="admin-main">
        {/* Header */}
        <section className="admin-header">
          <div className="header-content">
            <h1>⚙️ System Administration</h1>
            <p>Comprehensive system management and monitoring dashboard</p>
          </div>
          
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-icon">🟢</span>
              <span className="stat-label">System Health</span>
              <span className="stat-value">Excellent</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <span className="stat-label">Active Users</span>
              <span className="stat-value">3</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🔧</span>
              <span className="stat-label">Pending Tasks</span>
              <span className="stat-value">4</span>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="admin-navigation">
          <div className="nav-sections">
            {sections.map(section => (
              <button
                key={section.id}
                className={`nav-section ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="section-icon">{section.icon}</span>
                <span className="section-label">{section.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="admin-content">
          {renderContent()}
        </section>
      </main>

      <style jsx>{`
        .administration-page {
          min-height: 100vh;
          background: var(--surface-base);
        }

        .admin-main {
          padding-top: 80px;
        }

        /* Header */
        .admin-header {
          background: linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface-base) 100%);
          padding: var(--space-8) var(--space-6);
          margin-bottom: var(--space-6);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .header-content h1 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--energy-orange), var(--energy-blue));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--space-4);
        }

        .header-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--surface-elevated);
          padding: var(--space-4) var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-subtle);
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .stat-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Navigation */
        .admin-navigation {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          margin-bottom: var(--space-6);
        }

        .nav-sections {
          display: flex;
          gap: var(--space-2);
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-3);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
          overflow-x: auto;
        }

        .nav-section {
          background: transparent;
          border: none;
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-5);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          cursor: pointer;
          transition: all var(--transition-base);
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
        }

        .nav-section:hover {
          background: rgba(255, 107, 53, 0.1);
          color: var(--energy-orange);
        }

        .nav-section.active {
          background: var(--energy-orange);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .section-icon {
          font-size: 1.2rem;
        }

        /* Content */
        .admin-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6) var(--space-12);
        }

        .admin-section {
          background: var(--surface-elevated);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .add-user-btn,
        .add-maintenance-btn {
          background: var(--energy-orange);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .add-user-btn:hover,
        .add-maintenance-btn:hover {
          background: var(--energy-orange-dark);
          transform: translateY(-1px);
        }

        /* System Status */
        .status-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-4);
        }

        .status-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .status-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
        }

        .status-header h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
        }

        .status-badge {
          background: var(--status-success);
          color: white;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .status-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--energy-orange);
        }

        .status-indicator {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .status-detail {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .progress-bar {
          height: 6px;
          background: var(--border-base);
          border-radius: 3px;
          overflow: hidden;
          margin-top: var(--space-2);
        }

        .progress-fill {
          height: 100%;
          transition: width 0.5s ease;
          border-radius: 3px;
        }

        /* User Management */
        .users-table {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .table-header {
          background: var(--surface-elevated);
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr;
          gap: var(--space-4);
          padding: var(--space-4);
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-base);
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr;
          gap: var(--space-4);
          padding: var(--space-4);
          border-bottom: 1px solid var(--border-subtle);
          transition: all var(--transition-base);
        }

        .table-row:hover {
          background: var(--surface-elevated);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .user-name {
          color: var(--text-primary);
          font-weight: 600;
        }

        .user-email {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .role-badge {
          background: var(--energy-blue);
          color: white;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-block;
        }

        .user-login {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .user-actions {
          display: flex;
          gap: var(--space-2);
        }

        .action-btn {
          background: transparent;
          border: 1px solid var(--border-base);
          border-radius: var(--radius-sm);
          padding: var(--space-1) var(--space-2);
          cursor: pointer;
          transition: all var(--transition-base);
          font-size: 0.9rem;
        }

        .action-btn:hover {
          background: var(--surface-elevated);
          border-color: var(--energy-orange);
        }

        /* Security */
        .security-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .security-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .security-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .security-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .security-action {
          background: var(--energy-blue);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .security-alerts {
          margin-top: var(--space-8);
        }

        .security-alerts h3 {
          margin-bottom: var(--space-4);
          color: var(--text-primary);
          font-size: 1.25rem;
        }

        .alert-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          background: var(--surface-base);
          padding: var(--space-4);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          margin-bottom: var(--space-3);
        }

        .alert-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .alert-content {
          flex: 1;
        }

        .alert-content h4 {
          margin: 0 0 var(--space-1) 0;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .alert-content p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .alert-time {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        /* Maintenance */
        .maintenance-calendar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-4);
        }

        .maintenance-card {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          border: 1px solid var(--border-subtle);
          border-left: 4px solid var(--border-base);
        }

        .maintenance-card.priority-critical {
          border-left-color: var(--status-error);
        }

        .maintenance-card.priority-high {
          border-left-color: var(--energy-orange);
        }

        .maintenance-card.priority-medium {
          border-left-color: var(--energy-blue);
        }

        .maintenance-card.priority-low {
          border-left-color: var(--status-success);
        }

        .maintenance-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .maintenance-header h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .priority-badge {
          color: white;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .maintenance-details {
          margin-bottom: var(--space-4);
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--space-2);
        }

        .detail-row .label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .detail-row .value {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .maintenance-status {
          margin-bottom: var(--space-4);
        }

        .maintenance-actions {
          display: flex;
          gap: var(--space-2);
        }

        /* System Logs */
        .log-controls {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .log-filter {
          background: var(--surface-base);
          border: 1px solid var(--border-base);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          color: var(--text-primary);
          cursor: pointer;
        }

        .refresh-logs {
          background: var(--energy-blue);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          cursor: pointer;
          font-size: 0.9rem;
        }

        .logs-container {
          background: var(--surface-base);
          border-radius: var(--radius-lg);
          max-height: 500px;
          overflow-y: auto;
          border: 1px solid var(--border-subtle);
        }

        .log-entry {
          display: grid;
          grid-template-columns: 150px 80px 120px 1fr 120px;
          gap: var(--space-3);
          padding: var(--space-3);
          border-bottom: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          align-items: center;
        }

        .log-entry:hover {
          background: var(--surface-elevated);
        }

        .log-timestamp {
          color: var(--text-muted);
        }

        .log-level {
          font-weight: 600;
        }

        .log-module {
          color: var(--energy-blue);
          font-weight: 500;
        }

        .log-message {
          color: var(--text-primary);
        }

        .log-source {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-stats {
            flex-direction: column;
            align-items: center;
          }

          .nav-sections {
            flex-direction: column;
          }

          .status-grid,
          .security-grid,
          .maintenance-calendar {
            grid-template-columns: 1fr;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: var(--space-2);
          }

          .log-entry {
            grid-template-columns: 1fr;
            gap: var(--space-1);
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
          }

          .log-controls {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
}
