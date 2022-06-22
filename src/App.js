import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
