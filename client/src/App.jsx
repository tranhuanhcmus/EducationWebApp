import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";
import "./App.scss";
import ScrollButton from "../utils/ScrollButton";
import React from "react";
import CoursesDetails from "../pages/CoursesDetail";
import Courses from "../pages/Courses";

function App() {
  //Check User
  const currentUser = true;

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
          path: "/coursesdetails",
          element: <CoursesDetails />,
        },
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
