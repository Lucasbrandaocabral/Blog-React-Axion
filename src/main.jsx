import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'  

import App from './App.jsx'

// pages
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx';
import Admin from './routes/Admin.jsx';
import EditPost from './routes/EditPost.jsx';

const router = createBrowserRouter([
  
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPost />,
      },
      {
        path: "/Posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/Posts/edit/:id",
        element: <EditPost />,
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
