import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './styles/index.css';

//screens
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
