import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getImage } from "../utils/fetchData";
import { useState, useEffect } from "react";
import { makeRequest } from "./../utils/axios";
const BlogListSearch = () => {
  const location = useLocation();
  const [category, setCategory] = useState("");

  useEffect(() => {
    switch (location.pathname.split("/")[3]) {
      case "questions":
        setCategory("Questions");
        break;
      case "tips-and-trick":
        setCategory("Tips and Tricks");
        break;
      case "articles":
        setCategory("Articles");
        break;
      default:
        setCategory("Search");
        break;
    }
  }, [location]);
  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery(
    "blogs",
    () => {
      return makeRequest({
        method: "get",
        url: "/forum",
      });
    },
    {
      select: (data) => {
        if (category == "Search") {
          const { state: keyword } = location;

          return data.data
            .filter((data) =>
              data.TITLE.toUpperCase().includes(keyword.toUpperCase())
            )
            .sort(
              (a, b) =>
                new Date(b.DATE_ESTABLISHED) - new Date(a.DATE_ESTABLISHED)
            );
        } else
          return data.data
            .filter((data) => data.CATEGORY == category)
            .sort(
              (a, b) =>
                new Date(b.DATE_ESTABLISHED) - new Date(a.DATE_ESTABLISHED)
            );
      },
    }
  );

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      setImages([]);
      if (blogs) {
        for (var i = 0; i < blogs.length; i++) {
          const image = await getImage(`${blogs[i].ID}.png`);
          setImages((images) => [...images, image]);
        }
      }
    };
    loadImages();
  }, [blogs]);

  return blogs.length == 0 ? (
    <p className="mid col-span-6 md:col-span-1 bg-white text-center font-Poppins font-bold text-3xl ">
      No Blogs ...
    </p>
  ) : (
    <div className="mid col-span-6 md:col-span-1 bg-white  ">
      <section className=" font-Poppins flex flex-col px-5 py-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={blog.FID}
            className="item px-3 py-2 rounded-md  ring-2 ring-slate-400  hover:shadow-md "
          >
            <div className="header flex justify-between">
              <div className="user flex items-center gap-3">
                <img
                  src={images[index]}
                  alt="user Avatar"
                  className="rounded-full w-10 h-10 object-cover object-center"
                />
                <div className="flex-col justify-center">
                  <p className="font-semibold">@{blog.AUTHOR}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(blog.DATE_ESTABLISHED).toDateString()}
                  </p>
                </div>
              </div>
              <button className="rounded-full p-1">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
            <div className="content my-3 mx-2">
              <h6 className="p-2 font-bold w-full break-words text-xl">
                <Link
                  to={`details/${blog.FID}`}
                  state={{ blog }}
                  className="hover:cursor-pointer hover:text-orange-400"
                >
                  {blog.TITLE}
                </Link>
              </h6>
              <div className="info flex items-center justify-between text-sm text-slate-500 ">
                <a href="#" className="hover:underline">
                  {" "}
                  <i className="mr-2 fa-solid fa-bars"></i>
                  {blog.CATEGORY}
                </a>
                <div className="hashtags  flex gap-2 ">
                  <div className="px-1 py-2 text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
                    {blog.TAG}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-right">
              100 <i className="fa-regular fa-thumbs-up"></i> - 100{" "}
              <i className="fa-regular fa-comment"></i>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogListSearch;
