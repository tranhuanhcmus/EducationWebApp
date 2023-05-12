import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { makeRequest } from "./../../utils/axios";

const Left = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <div className="left col-span-2 md:col-span-1 bg-white  p-2  ">
      <section className="search flex flex-col border-b-2 border-slate-600 border-dashed pb-6">
        <span className="ml-3 text-sm md:text-md pt-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-solid fa-magnifying-glass"></i>
          Search
        </span>
        <div className={`relative flex flex-col `}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type={"text"}
            className={`w-full my-2 `}
          />
          <button
            onClick={() => {
              const haveKey = search.length != 0;
              if (haveKey) {
                navigate("category/search", { state: search });
              }
            }}
            className="px-3 py-2 ml-auto  rounded-xl text-slate-500 hover:text-indigo-600 text-sm   flex items-center justify-center absolute right-0 top-[80%]"
          >
            Go
            <i className="ml-2 fa-solid fa-arrow-right "></i>
          </button>
        </div>
      </section>

      <section className="menu flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
        <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-solid fa-bars"></i>
          Categories
        </span>

        <ul className="topic-list p-1">
          <Link to="category/tips-and-trick">
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-pen"></i>
              Tips and Tricks
            </li>
          </Link>
          <Link to="category/articles">
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-book"></i>Articles
            </li>
          </Link>
          <Link to="category/questions">
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-question"></i>Questions
            </li>
          </Link>
        </ul>
      </section>
      <section className="menu flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
        <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-sharp fa-solid fa-tags"></i>
          HashTags
        </span>
        <div className=" border-2  border-orange-400 grid p-2 grid-cols-2 md:grid-cols-3 gap-2">
          <Link to="hashtag/listening">
            <div className="px-1 py-2 text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #listening
            </div>
          </Link>
          <Link to="hashtag/writing">
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #writing
            </div>
          </Link>
          <Link to="hashtag/reading">
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #reading
            </div>
          </Link>
          <Link to="hashtag/speaking">
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #speaking
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
const Right = () => {
  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery(
    "latest-blogs",
    () => {
      return makeRequest({
        method: "get",
        url: "/forum",
      });
    },
    {
      select: (data) =>
        data.data
          .sort(
            (a, b) =>
              new Date(b.DATE_ESTABLISHED) - new Date(a.DATE_ESTABLISHED)
          )
          .slice(0, 4),
    }
  );
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return blogs.length == 0 ? (
    <p>No blogs</p>
  ) : (
    <div className="right col-span-2 md:col-span-1 bg-white    ">
      <section className="link flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
        <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-solid fa-star"></i>
          Must-read posts
        </span>

        <ul className="link-list p-1 font-Poppins">
          <li className="px-3 ml-3 text-sm text-blue-600 hover:text-black">
            <Link to={"#"}>
              <i className="mr-2 fa-solid fa-caret-right text-xs break-words"></i>
              Please read rules before you start working on this platform
            </Link>
          </li>
        </ul>
      </section>
      <section className="latest flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
        <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-solid fa-star"></i>
          Latest posts
        </span>

        <ul className="link-list p-1 font-Poppins ">
          {blogs.map((blog) => (
            <li key={blog.FID} className="px-3 ml-3 text-sm  ">
              <Link
                to={`details/${blog.FID}`}
                state={{ blog }}
                className="text-blue-900 hover:text-orange-400 hover:underline"
              >
                <i className="mr-2 fa-solid fa-caret-right text-xs break-words"></i>
                {blog.TITLE}
              </Link>
              <p className="mt-1 ml-3 text-slate-500">Author: {blog.AUTHOR} </p>
              <p className="mt-1 ml-3 text-slate-500">
                {new Date(blog.DATE_ESTABLISHED).toDateString()}
              </p>
              <Link
                to="category/articles"
                className="mt-1 ml-3 text-slate-500  hover:underline"
              >
                <i className="mr-2 fa-solid fa-bars"></i>
                {blog.CATEGORY}
              </Link>
              <hr className="my-2" />
            </li>
          ))}
        </ul>
      </section>
      <section className="share flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
        <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
          <i className="mr-2 fa-solid fa-share"></i>
          Share this blogs
        </span>

        <ul className="actions p-1 flex gap-1 justify-around">
          <li className="text-slate-500 hover:text-blue-600 text-xl">
            <a href="https://www.facebook.com/" target={"_blank"}>
              <i className="fa-brands fa-facebook "></i>
            </a>
          </li>
          <li className="text-slate-500 hover:text-sky-500 text-xl">
            <a href="https://www.twitter.com/" target={"_blank"}>
              <i className="fa-brands fa-twitter  "></i>
            </a>
          </li>
          <li className="text-slate-500 hover:text-red-600 text-xl">
            <a href="https://www.reddit.com/" target={"_blank"}>
              <i className="fa-brands fa-reddit "></i>
            </a>
          </li>
          <li className="text-slate-500 hover:text-rose-700 text-xl">
            <a href="https://www.pinterest.com/" target={"_blank"}>
              <i className="fa-brands fa-pinterest "></i>
            </a>
          </li>
          <li className="text-slate-500 hover:text-lime-400">
            <a href="https://www.whatsapp.com/" target={"_blank"}>
              <i className="fa-brands fa-whatsapp "></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
const BlogLayout = () => {
  return (
    <div className="w-full p-2 grid grid-flow-col grid-cols-10 md:grid-flow-row md:grid-cols-1   gap-2 bg-gray_100 ">
      <Left />
      <Outlet />
      <Right />
    </div>
  );
};

export default BlogLayout;
