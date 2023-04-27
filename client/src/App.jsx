import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ScrollButton from "./utils/ScrollButton";
import Cart from "./pages/Cart";
import Test from "./components/Test";
import "../public/dist/output.css";
import Lesson from "./pages/Lesson";
import ErrorPage from "./pages/404page";
import React from "react";
import CoursesDetails from "./pages/CoursesDetail";
import Courses from "./pages/Courses";
import BlogDetails from "./pages/BlogDetails";
import Pay from "./pages/Pay";

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
      errorElement: <ErrorPage />,
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
        { path: "/blogs", element: <Blogs /> },
        { path: "/BlogDetails", element: <BlogDetails /> },
        { path: "/lesson/:id", element: <Lesson /> },
        { path: "/pay", element: <Pay /> },
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
