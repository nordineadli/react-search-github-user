import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <AuthWrapper>
      <Router>
        <Routes> {/* avoid error showing in dashboard or login */}
          <Route path='/' exact={true} element={<PrivateRoute><Dashboard /></PrivateRoute>} /> {/* dashboard is the home page, exact: only navigate to dashboard when it matches the home page exactly */}
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
