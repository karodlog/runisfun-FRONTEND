import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/index.scss'
import {UserContextProvider} from './components/context/userContext.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
    <App />
    </UserContextProvider>
);

