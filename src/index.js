import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import YouTubeLogo from './Components/YouTubeLogo';
import ReactJsLogo from './Components/ReactJsLogo';
import GitHubLogo from './Components/GitHubLogo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/youtubelogo",
    element: <YouTubeLogo />,
  },
  {
    path: "/reactjslogo",
    element: <ReactJsLogo />,
  },
  {
    path: "/githublogo",
    element: <GitHubLogo />,
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
