import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom'

import Header from './app/components/header/header';

import PrivateRoute from './app/components/private/privateRoute';

import Index from './app/routes';
import Main from './app/routes/main';
import Profile from './app/routes/profile';
import Vlog from './app/routes/vlog';

function App() {

  const { user } = useSelector((state: any) => state)

  return (
    <Router>
          {
            localStorage.getItem("auth-data") === user.user.token && <Header />
          }
          <div className='container-content'>
            <Routes>
              <Route path='/' element={user.isLoggedIn ? <Navigate to="/main"/> : <Index />}/>
              <Route path='/main' element={<PrivateRoute />} >
                <Route path='/main' element={<Main />} />
                <Route path='/main/:id' element={<Profile />} />
              </Route>
              <Route path='/vlog' element={<PrivateRoute />} >
                <Route path='/vlog/:id' element={<Vlog />} />
              </Route>
            </Routes>
          </div>
    </Router>
  );
}

export default App;
