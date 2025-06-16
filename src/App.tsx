import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TestInterface from './pages/TestInterface';
import Results from './pages/Results';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-neutral-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/test/:testId" element={
            <ProtectedRoute>
              <TestInterface />
            </ProtectedRoute>
          } />
          <Route path="/results/:testId" element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;