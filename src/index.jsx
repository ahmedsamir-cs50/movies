import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.jsx';

ReactDom.render(<Provider store={store}>
<App /></Provider>, document.getElementById('root'));
