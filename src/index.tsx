import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from "./containers/App";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import ThemeProvider from "./context/ThemeProvider";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

