import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./Component/About/About.jsx";
import Resume from "./Component/Resume/Resume.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Component/Portfolio/Portfolio.jsx";
import Blog from "./Component/blogs/Blog.jsx";
import Contact from "./Component/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
