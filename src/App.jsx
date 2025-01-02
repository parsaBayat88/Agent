import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginForm from './components/Auth/LoginForm';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Achievements from './pages/Achievements';
import AITools from './pages/AITools';
import Calendar from './pages/Calendar';
import Billing from './pages/Billing';
import Home from './components/Landing-page/Home';
import Terms from './components/Refund/Terms';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/" element={<Home/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="ai-tools" element={<AITools />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;