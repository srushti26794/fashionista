import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/Admin/*' element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
