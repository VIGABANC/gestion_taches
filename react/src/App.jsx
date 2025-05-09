import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Maincontent from './maincontent';

export default function App() {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Update localStorage when user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        {/* Use a wildcard so nested routes inside Maincontent work */}
        <Route path="/app/*" element={<Maincontent user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
