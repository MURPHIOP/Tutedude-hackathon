import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/custom.css'; // Import your main custom CSS file

// Get the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');

// Create a React root and render the App component into it.
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the document.");
}