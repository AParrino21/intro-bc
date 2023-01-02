import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';

import { NaviBar } from './components';

const App = () => {



  return (
    <div className="App">
      
        <Router>
          <NaviBar.default />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
