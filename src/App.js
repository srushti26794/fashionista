import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<UserRoutes />} />
          <Route path='/Admin/*' element={<AdminRoutes />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
