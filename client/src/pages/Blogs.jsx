import { useState } from "react";
import BlogList from "./../components/BlogList";
const Blogs = () => {
  const [search, setSearch] = useState("");
  console.log(search);
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
      <div className="mid col-span-6 md:col-span-1 bg-white  ">
        <section className="new-post px-3 py-2 rounded-md border-2 mx-5 my-4 border-slate-400 font-Poppins flex flex-col ">
          <span className="font-semibold ">
            <i className=" mr-2 fa-solid fa-signs-post"></i>New Post
          </span>

          <div>
            <textarea
              className="my-2 w-full focus:h-[50vh]"
              name="post-content"
              id="post-content"
              rows="5"
            ></textarea>
            <div className="actions flex-col gap-3 items-center ">
              <div className=" p-2 flex gap-3 md:flex-col">
                <button className="px-5 py-1 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200  hover:scale-105 text-sm uppercase ">
                  <i className=" fa-solid fa-image"></i>
                </button>
                <button className="px-5 py-1 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200  hover:scale-105 text-sm uppercase ">
                  <i className=" fa-solid fa-file"></i>
                </button>
                <button className="px-5 py-1 text-center font-mono  duration-200 hover:shadow-md bg-slate-200 rounded-md hover:bg-indigo-200  hover:scale-105 text-sm uppercase ">
                  <i className=" fa-regular fa-face-smile"></i>
                </button>
              </div>
              <div className="p-2 flex gap-3 sm:flex-col ">
                <input
                  className="flex-1"
                  type="text"
                  placeholder="add hashtags"
                />
                <select className="flex-1" name="Categories" id="Categories">
                  <option value="Tips and Tricks">Tips and Tricks</option>
                  <option value="Articles">Articles</option>
                  <option value="Questions">Questions</option>
                </select>
              </div>

              <div className="p-2 flex gap-3 w-full ">
                <button className="p-2  text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md ml-auto hover:bg-indigo-900  hover:font-bold hover:text-white hover:scale-105 text-sm uppercase ">
                  Publish
                  <i className="ml-2 fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=" font-Poppins flex flex-col px-5 py-3 gap-6">
          <BlogList />
        </section>
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
            Latest posts
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

export default Blogs;
