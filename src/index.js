import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'aos/dist/aos.css';

// importing bootstrap from
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//importing react-tostify
import 'react-toastify/dist/ReactToastify.css';

//importing React Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

//importing Provider

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
