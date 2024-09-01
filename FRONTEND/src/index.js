import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Connect from "./pages/Connect";
import Quizzes from "./pages/Quizzes";
import Blog from "./pages/Blog";
import Scholarship from "./pages/Scholarship";
import AuthForm from "./pages/AuthForm";
import Quiz from "./pages/Quiz2"; // Import the Quiz2 component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/connect",
    element: <Connect />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/quizzes",
    element: <Quizzes />,
  },
  {
    path: "/scholarship",
    element: <Scholarship />,
  },
  {
    path: "/authform",
    element: <AuthForm />,
  },
  {
    path: "/quiz2", // Add this route for Quiz2
    element: <Quiz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
