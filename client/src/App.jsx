import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ScrollButton from "./utils/ScrollButton";

import "../public/dist/output.css";
import React from "react";
import CoursesDetails from "../pages/CoursesDetail";
import Courses from "../pages/Courses";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <ScrollButton />
        <Footer />
      </>
    );
  };

  //Setting Router
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },

        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/courses/:courseId",
          element: <Courses />,
        },
        {
          path: "/coursesdetails/:courseId",
          element: <CoursesDetails />,
        },
        {
          path: "/coursesdetails",
          element: <CoursesDetails />,
        },
        { path: "/profile", element: <Profile /> },
        { path: "/cart", element: <Cart /> },
        { path: "/test", element: <Test /> },
        { path: "/lesson/:id", element: <Lesson /> },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
