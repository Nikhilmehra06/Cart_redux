import React, { useEffect, useState } from 'react';
import login from '../assets/images/login.jpg';
import { useNavigate } from 'react-router-dom';
import { userlogin } from '../redux/Login/Login.action';
import { connect } from 'react-redux';
import aos from 'aos';
import { toast } from 'react-toastify';

toast.configure();

const Login = ({ userlogin }) => {
  const notify = () => {
    toast.success('Login Sucessfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const Navigate = useNavigate();
  useEffect(() => {
    aos.init({
      once: true,
    });
  }, []);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    emailErr: '',
    passwordErr: '',
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!user.email && !user.password) {
      setError({
        ...error,
        emailErr: 'This Field is Required',
        passwordErr: 'This field is Required',
      });
    } else if (!user.email || regex.test(user.email) === false) {
      setError({
        ...error,
        emailErr: 'Enter Valid Email',
      });
    } else if (!user.password || user.password.length < 8) {
      setError({
        ...error,
        passwordErr: 'Enter valid password',
      });
    } else {
      localStorage.setItem('token', 'ACCESS GRANTED');
      localStorage.setItem('name', user.username);
      Navigate('/');
      notify();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validation();
    userlogin(user);
  };
  return (
    <>
      <h2 className="text-center mt-3">We Sell, What You Need</h2>
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="container mt-5 "
      >
        <div className="row">
          <div className="col-md-6 login-img-container">
            <img
              src={login}
              alt="login"
              className="login-img shadow col-md-9"
            />
          </div>

          <div className="col-md-6 shadow p-3 rounded-3">
            <form onSubmit={submitHandler}>
              <div className="mb-3 ">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={user.username}
                  name="username"
                  onChange={onChangeHandler}
                />
                <span style={{ color: 'red' }}>{error.usernameErr}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={user.email}
                  name="email"
                  onChange={(e) => {
                    onChangeHandler(e);
                    setError({ ...error, emailErr: '' });
                  }}
                />
                <span style={{ color: 'red' }}>{error.emailErr}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={user.password}
                  name="password"
                  onChange={(e) => {
                    onChangeHandler(e);
                    setError({ ...error, passwordErr: '' });
                  }}
                />
                <span style={{ color: 'red' }}>{error.passwordErr}</span>
              </div>

              <button type="submit" className="btn btn-outline-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userlogin: (user) => dispatch(userlogin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
