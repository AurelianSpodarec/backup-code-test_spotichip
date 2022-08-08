import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'views/App';
import {  useDispatch, Provider } from 'react-redux'


import './styles/styles.scss';
import reportWebVitals from 'utils/reportWebVitals';
import { store } from 'store/store';


const root = ReactDOM.createRoot( 
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>  
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
