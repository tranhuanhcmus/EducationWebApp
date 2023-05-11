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
import TeacherCourses from "./pages/TeacherCourses";
import TeacherCoursesDetails from "./pages/TeacherCourseDetail";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import BlogLayout from "./pages/Blogs/BlogLayout";
import SuccessfulPage from "./pages/PaymenySuccess";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();
function App() {
  const currentUser = useSelector((state) => state.auth.user);
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

  if (currentUser.ROLE === "teacher") {
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
            path: "/coursesdetails/:courseId",
            element: <CoursesDetails />,
          },
          {
            path: "/coursesdetails/:courseId/:lessonId",
            element: <CoursesDetails />,
          },
          { path: "/profile", element: <Profile /> },
          { path: "/TeacherCourse", element: <TeacherCourses /> },
          { path: "/cart", element: <Cart /> },
          {
            path: "/test",
            element: <Test />,
          },
          {
            path: "/blogs",
            Component: BlogLayout,
            children: [
              {
                path: "/blogs/",
                Component: Blogs,
              },
              {
                path: "/blogs/details/:id",
                Component: BlogDetails,
              },
              {
                path: "/blogs/category/:name",
                Component: Test,
              },
              {
                path: "/blogs/hashtag/:name",
                Component: Test,
              },
            ],
          },
          { path: "/lesson/:id", element: <Lesson /> },
          { path: "/pay", element: <Pay /> },
          { path: "/TeacherCourseDetails", element: <TeacherCoursesDetails /> },
          {
            path: "/TeacherCourseDetails/:courseId",
            element: <TeacherCoursesDetails />,
          },
          {
            path: "/TeacherCourseDetails/:courseId/:lessonId",
            element: <TeacherCoursesDetails />,
          },
          { path: "/cart/:PayMentID", element: <Cart /> },
          { path: "/PaymentSuccess", element: <SuccessfulPage /> },
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
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
        <ReactQueryDevtools initialIsOpen="false" />
      </QueryClientProvider>
    );
  } else {
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
            path: "/coursesdetails/:courseId",
            element: <CoursesDetails />,
          },
          {
            path: "/coursesdetails/:courseId/:lessonId",
            element: <CoursesDetails />,
          },
          { path: "/profile", element: <Profile /> },
          { path: "/cart", element: <Cart /> },
          {
            path: "/test",
            element: <Test />,
          },
          {
            path: "/blogs",
            Component: BlogLayout,
            children: [
              {
                path: "/blogs/",
                Component: Blogs,
              },
              {
                path: "/blogs/details/:id",
                Component: BlogDetails,
              },
              {
                path: "/blogs/category/:name",
                Component: Test,
              },
              {
                path: "/blogs/hashtag/:name",
                Component: Test,
              },
            ],
          },
          { path: "/lesson/:id", element: <Lesson /> },
          { path: "/pay", element: <Pay /> },
          { path: "/cart/:PayMentID", element: <Cart /> },
          { path: "/PaymentSuccess", element: <SuccessfulPage /> },
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
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    );
  }
}

export default App;
