import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18+
import App from './App'; // Import your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// Import global CSS files. These paths are relative to index.js
import './index.css';
import './styles/custom.css';

// Get the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');

// Create a React root and render the App component into it.
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router> {/* BrowserRouter wraps the entire App */}
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the document.");
}

