import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Header from './app/components/header/header';

import PrivateRoute from './app/components/private/privateRoute';

import Index from './app/routes';
import Main from './app/routes/main';

import store from './app/store';

function App() {

  const { user } = useSelector((state: any) => state)

  return (
    <Router>
          {
            localStorage.getItem("auth-data") === user.user.token && <Header />
          }
          <div className='container-content'>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/main' element={<PrivateRoute />} >
                <Route path='/main' element={<Main />} />
              </Route>
            </Routes>
          </div>
    </Router>
  );
}

export default App;
