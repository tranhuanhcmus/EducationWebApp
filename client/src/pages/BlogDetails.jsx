import React from "react";
import { useState } from "react";
import CommentList from "../components/CommentList";

const BlogDetails = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [liked, setLiked] = useState(false);
  return (
    <div className="w-full p-2 grid grid-flow-col grid-cols-10 md:grid-flow-row md:grid-cols-1   gap-2 bg-gray_100 ">
      <div className="left col-span-2 md:col-span-1 bg-white  p-2  ">
        <section className="search flex flex-col border-b-2 border-slate-600 border-dashed pb-6">
          <span className="ml-3 text-sm md:text-md pt-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
            <i className="mr-2 fa-solid fa-magnifying-glass"></i>
            Search
          </span>
          <div className={`relative flex flex-col `}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type={"text"}
              className={`w-full my-2 `}
            />
            <button
              onClick={() => setShowSearch((state) => !state)}
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
            Topics
          </span>

          <ul className="topic-list p-1">
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-pen"></i>
              Tips and Tricks
            </li>
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-book"></i>Articles
            </li>
            <li className="ml-4 py-3 px-2 text-sm font-mono hover:bg-slate-200/30 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:translate-y-[-8%] duration-200 hover:cursor-pointer">
              <i className="mr-2 fa-solid fa-question"></i>Questions
            </li>
          </ul>
        </section>
        <section className="menu flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
          <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
            <i className="mr-2 fa-sharp fa-solid fa-tags"></i>
            HashTags
          </span>
          <div className=" border-2  border-orange-400 grid p-2 grid-cols-2 md:grid-cols-3 gap-2">
            <div className="px-1 py-2 text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #listening
            </div>
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #writing
            </div>
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #reading
            </div>
            <div className="px-1 py-2 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
              #speaking
            </div>
          </div>
        </section>
      </div>
      <div className="mid col-span-6 md:col-span-1 bg-white px-5 ">
        <section className="post font-Poppins flex flex-col  py-3 gap-6">
          <div className="item px-3 py-2 rounded-md  ring-2 ring-slate-400  hover:shadow-md ">
            <div className="header flex justify-between">
              <div className="user flex items-center gap-3">
                <img
                  src="anh4.png"
                  alt="user Avatar"
                  className="rounded-full w-10 h-10 object-cover object-center"
                />
                <div className="flex-col justify-center">
                  <p className="font-semibold">@HarryBui</p>
                  <p className="text-xs text-slate-400">
                    12 November 2020 19:35
                  </p>
                </div>
              </div>
              <button className="rounded-full p-1">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
            <div className="content my-3 mx-2">
              <h6 className="p-2 font-bold w-full break-words text-xl">
                Title of the Blog
              </h6>
              <div className="info flex items-center justify-between text-sm text-slate-500 ">
                <a href="#" className="hover:underline">
                  {" "}
                  <i className="mr-2 fa-solid fa-bars"></i>Questions
                </a>
                <div className="hashtags  flex gap-4 md:gap-2 ">
                  <div className="px-1 py-2 text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
                    #listening
                  </div>
                  <div className="px-1 py-2 text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200 hover:cursor-pointer hover:scale-105 text-sm ">
                    #listening
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setLiked((liked) => !liked)}
              className={`w-[200px] rounded-lg ml-auto py-2 text-center font-mono ring-2 ring-slate-400 text-sm ${
                liked ? "bg-sky-500 text-white font-bold" : ""
              } flex items-center justify-center gap-2 hover:cursor-pointer hover:ring-sky-500`}
            >
              <div className="">
                <i class="fa-regular fa-thumbs-up"></i>
              </div>
              100 Likes
            </button>
            <p className="mt-3 p-2 text-justify break-words">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              non optio dolores repellendus exercitationem id nesciunt autem
              quae, ratione debitis facere tenetur eveniet odio tempore
              doloribus distinctio natus dicta pariatur rem nisi illum sapiente
              mollitia minima similique! Qui animi eaque cum totam vel
              voluptatum suscipit, maxime impedit quis officia? Ipsum temporibus
              architecto exercitationem nulla dolore excepturi reiciendis rem,
              quaerat pariatur provident inventore magni incidunt possimus. Quae
              ex magni recusandae, voluptates porro, rerum totam aperiam
              adipisci repellendus ratione maiores neque? Itaque, aperiam ea.
              Numquam molestiae nihil beatae omnis magni, deleniti aut
              consectetur, maiores asperiores aliquam facere voluptatem. Nihil
              debitis delectus quas.
            </p>
          </div>
        </section>
        <div className="comment font-Poppins">
          <h4 className="p-2 text-center  text-xl font-bold  text-indigo-500">
            Suggestions
          </h4>
          <div className="mb-3">
            <textarea className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"></textarea>
            <div className="flex justify-end gap-3">
              <button className="px-3 py-2 mt-2  text-center bg-slate-300 rounded-md  ring-slate-500 hover:ring-2">
                Cancel
              </button>
              <button className="px-3 py-2 mt-2  text-center bg-indigo-500 rounded-md  ring-slate-500 hover:ring-2">
                Comment
              </button>
            </div>
          </div>
          <CommentList />
        </div>
      </div>

      <div className="right col-span-2 md:col-span-1 bg-white    ">
        <section className="link flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
          <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
            <i className="mr-2 fa-solid fa-star"></i>
            Must-read posts
          </span>

          <ul className="link-list p-1 font-Poppins">
            <li className="px-3 ml-3 text-sm text-blue-600 hover:text-black">
              <a href="#">
                <i className="mr-2 fa-solid fa-caret-right text-xs break-words"></i>
                Please read rules before you start working on this platform
              </a>
            </li>
          </ul>
        </section>
        <section className="latest flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
          <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
            <i className="mr-2 fa-solid fa-star"></i>
            Must-read posts
          </span>

          <ul className="link-list p-1 font-Poppins">
            <li className="px-3 ml-3 text-sm  ">
              <a
                href="#"
                className="text-blue-900 hover:text-orange-400 hover:underline"
              >
                <i className="mr-2 fa-solid fa-caret-right text-xs break-words"></i>
                Article of listening exam band 6.0
              </a>
              <p className="mt-1 ml-3 text-slate-500">Author: HarryBui </p>
              <p className="mt-1 ml-3 text-slate-500">3 minutes ago</p>
              <a href="#" className="mt-1 ml-3 text-slate-500  hover:underline">
                <i className="mr-2 fa-solid fa-bars"></i>
                Articles
              </a>
            </li>
          </ul>
        </section>
        <section className="share flex flex-col border-b-2 border-slate-600 border-dashed pb-2">
          <span className="ml-3 text-sm md:text-md py-3 rounded-xl font-semibold font-mono uppercase text-slate-600">
            <i className="mr-2 fa-solid fa-share"></i>
            Share this blogs
          </span>

          <ul className="actions p-1 flex gap-1 justify-around">
            <li className="text-slate-500 hover:text-blue-600 text-xl">
              <a href="#">
                <i className="fa-brands fa-facebook "></i>
              </a>
            </li>
            <li className="text-slate-500 hover:text-sky-500 text-xl">
              <a href="#">
                <i className="fa-brands fa-twitter  "></i>
              </a>
            </li>
            <li className="text-slate-500 hover:text-red-600 text-xl">
              <a href="#">
                <i className="fa-brands fa-reddit "></i>
              </a>
            </li>
            <li className="text-slate-500 hover:text-rose-700 text-xl">
              <a href="#">
                <i className="fa-brands fa-pinterest "></i>
              </a>
            </li>
            <li className="text-slate-500 hover:text-lime-400">
              <a href="#">
                <i className="fa-brands fa-whatsapp "></i>
              </a>
            </li>
            <li className="text-slate-500 hover:text-black">
              <a href="#">
                <i className="fa-solid fa-link "></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
