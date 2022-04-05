import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EnterprisePage from './pages/EnterprisePage'
import ConfigurationPage from './pages/ConfigurationPage'

function App() {
  return (
    <Routes>
      {/* <Route path={'/enterprise'} element={<EnterprisePage />}/> */}
      <Route path={'/e'} element={<EnterprisePage />}/>
      {/* <Route path={'/configuration'} element={<ConfigurationPage />}/> */}
      {/* <Route path={'/conf'} element={<ConfigurationPage />}/> */}
      <Route path={'/c'} element={<ConfigurationPage />}/>
      <Route path={'*'} element={<EnterprisePage />}/>
    </Routes>
  );
}

export default App;
