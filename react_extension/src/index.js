import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

// react 18不支持这个
// ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById('root'))

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </BrowserRouter>
);