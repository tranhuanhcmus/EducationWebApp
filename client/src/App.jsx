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
import CoursesDetails from "./pages/CoursesDetail";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Test from "./components/Test";

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
          path: "/coursesdetails",
          element: <CoursesDetails />,
        },
        { path: "/profile", element: <Profile /> },
        { path: "/cart", element: <Cart /> },
        { path: "/test", element: <Test /> },
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
