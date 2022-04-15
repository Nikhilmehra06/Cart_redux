import { Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Products from './pages/Products';
import Submit from './pages/Submit';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/" element={<Home />} />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/submit"
            element={
              <PrivateRoute>
                <Submit />
              </PrivateRoute>
            }
          />

          <Route path="*" exact={true} element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
