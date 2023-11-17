import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        // element: <Home />,
      },
      {
        path: '/About',
        // element: <About />,
      },
      {
        path: '/Blog',
        // element: <Blog />,
      },
      {
        path: '/Contact',
        // element: < />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
