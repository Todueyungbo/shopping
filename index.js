import React from 'react';
import ReactDOM from 'react-dom/client'; // Import React 18's ReactDOM client
import './style.css'; // Import your global CSS
import App from './App';

// Find the root element
const rootElement = document.getElementById('root');

// Create a root to render your app into
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
