// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LandingPage from './Landing/LandingComponents/LandingPage.jsx';
import DashboardMain from './DashboardMain.jsx';
import CompanyForm from './components/CompanyForm.jsx';
import PaymentDashboard from './components/PaymentTracker.jsx';
import Dashboard from './pages/Dashboard.jsx';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardMain /></ProtectedRoute>} />
          <Route path="/companyform" element={<CompanyForm/>}/>
          <Route path='/invoice' element={<Dashboard/>}/>
          <Route path='/paymenttracker' element={<PaymentDashboard/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
