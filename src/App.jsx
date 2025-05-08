import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './component/protectedroute';
import Navbar from './component/navbar';
import Login from './component/login';
import Dashboard from './component/dashboard';
import Home from './component/home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-screen flex flex-col justify-center items-center ">
      {/* Navbar stays at the top, with full width */}
      <Navbar />
      
      {/* Main content with larger width and centered routes */}
      <div className="flex flex-col items-center justify-center w-full max-w-full p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
