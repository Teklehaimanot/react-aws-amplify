import './App.css';
import AuthUser from './pages/AuthUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import ProtectedRoutes from './ProtectedRoutes';
import Signup from './components/signup/Signup';
import EmailConfirm from './components/pupup/EmailConfirm';
import { userContext } from './context/UserProvider';
import { useContext } from 'react';
import Profile from './pages/Profile';
import View from './pages/View';
import Help from './pages/Help';
import File from './pages/File';
import Maps from './pages/Maps';

function App() {
  const { isAuthenticating, isAuthenticated, user } = useContext(userContext);

  return (
    <div>
      {!isAuthenticating && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthUser />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/confirmation" element={<EmailConfirm />} />
          </Routes>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/file" element={<File />} />
              <Route path="/view" element={<View />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/help" element={<Help />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
