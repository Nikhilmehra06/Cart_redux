import React from 'react';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Header = ({ cartItem }) => {
  const token = localStorage.getItem('token');

  const logOutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    toast.warning('Login Sucessfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    window.location.href = '/';
  };

  const seachHandler = () => {
    console.log('output from search Handler');
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : ' ',
    };
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white shadow-sm sticky-sm-top ">
      <div className="container">
        <NavLink to="/" className="navbar-brand ">
          E-Commerce
        </NavLink>

        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink style={navLinkStyle} to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyle} to="/products" className="nav-link">
                Product
              </NavLink>
            </li>
          </ul>
          {token && (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={seachHandler}
              />
            </form>
          )}

          <IconContext.Provider value={{ size: '1rem' }}>
            <div className="buttons">
              <Link
                to="/cart"
                className="btn  btn-sm btn-outline-dark me-2 p-1"
              >
                <FaShoppingCart />
                Cart
                <span className="ms-1 rounded-circle border border-dark p-1">
                  {cartItem.length}
                </span>
              </Link>
              {token ? (
                <>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={logOutHandler}
                  >
                    <FiLogIn />
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-sm btn-outline-dark">
                  <FiLogIn />
                  Login
                </Link>
              )}
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItem: state.cartReducer.cartItem,
  };
};

export default connect(mapStateToProps, null)(Header);
