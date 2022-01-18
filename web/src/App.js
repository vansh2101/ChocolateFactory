import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './styles/index.css';

//screens
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
// <<<<<<< HEAD
import Profile from './pages/Profile'
// =======
import Stock from './pages/Stock';
import AdminDashboard from './pages/AdminDashboard';
import Employee from './pages/Employee';
//>>>>>>> 46bec70218fcbb61ffd3a8f0d9a7ac04166626eb


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
