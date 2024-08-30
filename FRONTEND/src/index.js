import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Nasa from "./pages/Nasa";
import Connect from "./pages/Connect";
import Quizzes from "./pages/Quizzes";
import Blog from "./pages/Blog";
import Scholarship from "./pages/Scholarship";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "nasa",
    element: <Nasa />,
  },
  {
    path: "connect",
    element: <Connect />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "quizzes",
    element: <Quizzes />,
  },
  {
    path: "scholarship",
    element: <Scholarship />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
