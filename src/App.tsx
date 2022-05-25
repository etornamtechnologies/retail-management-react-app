import React from 'react';
import "antd/dist/antd.less";
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { history } from './utils/common-helper';

const LoginPage = React.lazy(() => import('./pages/login-page'))
const PrivatePages = React.lazy(() => import('./pages/private-pages'))

function App() {

  return (
    <>
    <React.Suspense fallback={<Spin/>}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/sign-in' element={<LoginPage />} />
          <Route path='/*' element={<PrivatePages/>} />
        </Routes>
      </HistoryRouter>
    </React.Suspense>
    </>
  );
}

export default App;
