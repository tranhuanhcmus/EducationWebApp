import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useSelector } from "react-redux";
import BlogList from "./../../components/BlogList";
import { makeRequest } from "./../../utils/axios";
import utils from "./../../utils/utils";
const Blogs = () => {
  const queryClient = useQueryClient();
  const currentUser = useSelector((state) => state.auth.user);

  const [hashTags, setHashTags] = useState("");
  const [category, setCategory] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = async () => {
    const currentDate = (+new Date()).toString(36);
    const FID = currentDate + currentUser.ID;

    const res = await makeRequest({
      url: "/af",
      method: "post",
      data: {
        FID: FID.slice(0, 22),
        Content: ` ${content}`,
        Title: title,
        ID: currentUser.ID,
        Img: "",
        Tag: hashTags,
        Category: category,
      },
    });
    setHashTags("");
    setTitle("");
    setContent("");
    setCategory(null);
    return res;
  };
  const { mutate: addBlog } = useMutation(saveBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
    },
  });

  return (
    <div className="mid col-span-6 md:col-span-1 bg-white  ">
      <section
        className={`new-post px-3 py-2 rounded-md border-2 mx-5 my-4 border-slate-400 font-Poppins flex flex-col ${
          !utils.checkUser(currentUser) ? "hidden" : ""
        }`}
      >
        <span className="font-semibold ">
          <i className=" mr-2 fa-solid fa-signs-post"></i>New Post
        </span>

        <div>
          <label className=" mr-2 uppercase font-bold text-2xl" htmlFor="Title">
            Title:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full font-Poppins font-semibold uppercase text-xl text-center"
            id="Title"
            type="text"
          />
          <textarea
            className="my-2 w-full focus:h-[50vh]"
            name="post-content"
            id="post-content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
                value={hashTags}
                className="flex-1"
                type="text"
                placeholder="add hashtags"
                onChange={(e) => setHashTags(e.target.value)}
              />
              <select
                className="flex-1"
                name="Categories"
                id="Categories"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Tips and Tricks">Tips and Tricks</option>
                <option value="Articles">Articles</option>
                <option value="Questions">Questions</option>
              </select>
            </div>

            <div className="p-2 flex gap-3 w-full ">
              <button
                onClick={addBlog}
                className="p-2  text-center font-mono duration-200 hover:shadow-md bg-slate-200 rounded-md ml-auto hover:bg-indigo-900  hover:font-bold hover:text-white hover:scale-105 text-sm uppercase "
              >
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
  );
};

export default Blogs;
