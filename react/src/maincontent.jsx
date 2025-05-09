import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Iconsio5 from 'react-icons/io5';
import * as icontb from 'react-icons/tb';

import './App.css';
import './styles/Dachboard.css';
import './styles/taches.css';
import './styles/Division.css';
import './styles/DivisionManagement.css';
//ADMIN
import AdminDachboard from './pages/user/admine/AdminDashboard';
import AddDivisionTask from './pages/user/admine/Taches';
import AdminDivisions from './pages/user/admine/Division';
import Settings from './pages/user/admine/Settings';
import Statistics from './pages/user/admine/Statistics';
import photoprofile from './images/Screenshot 2025-04-10 141717.png';
//RESPONSABLE
import DashboardPage from './pages/user/divresponsable/DashboardPage';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TaschesDetaile from './pages/user/divresponsable/taschesdetaile';
import UserProfile from './pages/user/UserProfile';
import History from './pages/user/divresponsable/HistoryDivsion';
import TaskManagement from './pages/user/divresponsable/TaskManagement';
import Historyadmin from './pages/user/admine/historyadmin';
import Statisticepardivision from './pages/user/admine/statisticepardivision';

export default function Maincontent({ user, setUser }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      setIsSidebarOpen(false);
    } else if (diff < -50) {
      setIsSidebarOpen(true);
    }
  }, [touchStart]);

  const handleTouchEnd = useCallback(() => {
    setTouchStart(null);
  }, []);

  if (!user || !user.username) {
    return (
      <div>
        Non autorisé. Veuillez vous <a href="/">connecter</a>.
      </div>
    );
  }

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div 
      className={`app-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isMobile && isSidebarOpen && (
        <div 
          className="mobile-backdrop active" 
          onClick={closeSidebar}
          role="presentation"
          aria-hidden="true"
        />
      )}
      
      <aside 
        className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="logo">
          <div className="user-role">
            {user.username ? `${user.username}  `: 'Loading...'}
          </div>
          {sidebarCollapsed ? (
            <icontb.TbLayoutSidebarLeftExpand
              size={35}
              fill="#DDDDDD"
              className="Sidebar"
              onClick={toggleSidebar}
              style={{ cursor: 'pointer' }}
              aria-label="Expand sidebar"
              role="button"
              tabIndex={0}
            />
          ) : (
            <icontb.TbLayoutSidebarLeftCollapse
              size={35}
              fill="#DDDDDD"
              className="Sidebar"
              onClick={toggleSidebar}
              style={{ cursor: 'pointer' }}
              aria-label="Collapse sidebar"
              role="button"
              tabIndex={0}
            />
          )}
        </div>

        <nav className="navigation">
          <ul className="menu-list">
            {user.role === 'admin' && (
              <>
                <li className="menu-item">
                  <Link 
                    to="/app" 
                    className={`menu-link ${location.pathname === '/app' ? 'active' : ''}`}
                    onClick={closeSidebar}
                    aria-current={location.pathname === '/app' ? 'page' : undefined}
                  >
                    <Iconsio5.IoHome size={32} className="menu-icon" aria-hidden="true" />
                    <span className="menu-text">Dashboard</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Taches" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoList size={32} className="menu-icon" />
                    <span className="menu-text">Task Management</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Division" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoAnalytics size={32} className="menu-icon" />
                    <span className="menu-text">Division Management</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Statistics" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoStatsChart size={32} className="menu-icon" />
                    <span className="menu-text">Statistics</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Settings" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoSettings size={32} className="menu-icon" />
                    <span className="menu-text">Settings</span>
                  </Link>
                </li>
              </>
            )}

            {user.role === 'division_responsable' && (
              <>
                <li className="menu-item">
                  <Link 
                    to="/app" 
                    className={`menu-link ${location.pathname === '/app' ? 'active' : ''}`}
                    onClick={closeSidebar}
                    aria-current={location.pathname === '/app' ? 'page' : undefined}
                  >
                    <Iconsio5.IoHome size={32} className="menu-icon" aria-hidden="true" />
                    <span className="menu-text">Dashboard</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Detail" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoList size={32} className="menu-icon" />
                    <span className="menu-text">Task Detail</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/TaskManagement" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoAnalytics size={32} className="menu-icon" />
                    <span className="menu-text">Task Management</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/app/Settings" className="menu-link" onClick={closeSidebar}>
                    <Iconsio5.IoSettings size={32} className="menu-icon" />
                    <span className="menu-text">Settings</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      <header className="app-header">
        {isMobile && (
          <button 
            className="mobile-menu-btn" 
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
            aria-controls="sidebar"
          >
            <Iconsio5.IoMenu size={24} aria-hidden="true" />
          </button>
        )}
        <div className="user-actions">
          <button 
            className="notification-btn"
            aria-label="Notifications"
          >
            <Iconsio5.IoNotificationsSharp size={22} aria-hidden="true" />
            <span className="notification-badge" aria-label="3 unread notifications">3</span>
          </button>
          <div className="user-profile">
            <IconButton 
              onClick={handleProfileClick}
              aria-label="User menu"
              aria-expanded={open}
              aria-haspopup="true"
            >
              <img 
                src={photoprofile} 
                alt={`${user.username}'s profile`} 
                className="profile-image" 
              />
            </IconButton>
            <Menu
              id="profile-menu"
              style={{padding:"0%"}}
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              role="menu"
              aria-label="User menu"
            >
              <Link to={`/app/Profile/${user.username}/${user.role}/${user.division_id}`}>
                <MenuItem onClick={handleCloseMenu} role="menuitem">
                  <span>Profil</span>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleLogout} role="menuitem">Déconnexion</MenuItem>
            </Menu>
          </div>
        </div>
      </header>

      <main className="main-content" role="main">
        <Routes>
          <Route path="Profile/:user/:role/:division" element={<UserProfile />} />
          {user.role === 'admin' && (
            <>
              <Route index element={<AdminDachboard />} />
              <Route path="Taches" element={<AddDivisionTask />} />
              <Route path="Division" element={<AdminDivisions />} />
              <Route path="Statistics" element={<Statistics />} />
       
              <Route path="HistoryAdmin/:idid_task" element={<Historyadmin />} />
              <Route path="stidivision/:iddiv" element={<Statisticepardivision />} />
              <Route path="Settings" element={<Settings />} />
            </>
          )}

          {user.role === 'division_responsable' && (
            <>
              <Route index element={<DashboardPage user={user} />} />
              <Route path="Detail" element={<TaschesDetaile user={user} />} />
              <Route path="history/:id_task" element={<History />} />
              <Route path="TaskManagement" element={<TaskManagement user={user}/>} />
              <Route path="Settings" element={<Settings />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

Maincontent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
    division_id: PropTypes.string
  }),
  setUser: PropTypes.func.isRequired
};

Maincontent.defaultProps = {
  user: null
};