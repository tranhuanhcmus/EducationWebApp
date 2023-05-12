import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import CommentList from "./../../components/CommentList";
import utils from "./../../utils/utils";
import { makeRequest } from "./../../utils/axios";
import { getImage } from "../../utils/fetchData";

const BlogDetails = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const [liked, setLiked] = useState(false);
  const [cmt, setCmt] = useState("");
  const [blog, setBlog] = useState(null);
  const [image, setImage] = React.useState("not yet");

  const location = useLocation();

  useEffect(() => {
    const { blog } = location.state;
    setBlog(blog);
    const loadImage = async () => {
      const newImage = await getImage(blog?.IMG);
      setImage(newImage);
    };
    loadImage();
  }, [location]);

  const queryClient = useQueryClient();

  const saveComment = async () => {
    const currentDate = (+new Date()).toString(36);
    const CMTID = currentDate + blog.FID + currentUser.ID;
    const Content = cmt;

    const res = await makeRequest({
      url: "/afcmt",
      method: "post",
      data: {
        CmtID: CMTID.slice(0, 22),
        Content: ` ${Content}`,
        FID: blog.FID,
        ID: currentUser.ID,
      },
    });
    return res;
  };
  const { mutate: addComment } = useMutation(saveComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return (
    blog && (
      <div className="mid col-span-6 md:col-span-1 bg-white px-5 ">
        <section className="post font-Poppins flex flex-col  py-3 gap-6">
          <div className="item px-3 py-2 rounded-md  ring-2 ring-slate-400  hover:shadow-md ">
            <div className="header flex justify-between">
              <div className="user flex items-center gap-3">
                <img
                  src="/anh4.png"
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
                {blog.TITLE}
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
                <i className="fa-regular fa-thumbs-up"></i>
              </div>
              100 Likes
            </button>
            <p className="mt-3 p-2 text-justify break-words">{blog.CONTENT}</p>
            {blog.IMG && (
              <img
                className="object-contain object-center w-full "
                src={image}
                alt="Image-Blog"
              />
            )}
          </div>
        </section>
        <div className="comment font-Poppins">
          <h4 className="p-2 text-center  text-xl font-bold  text-indigo-500">
            Suggestions
          </h4>
          <div className="mb-3">
            <textarea
              value={cmt}
              onChange={(e) => setCmt(e.target.value)}
              className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"
            ></textarea>
            <div className="flex justify-end gap-3">
              <button
                className="px-3 py-2 mt-2  text-center bg-slate-300 rounded-md  ring-slate-500 hover:ring-2"
                onClick={() => setCmt("")}
              >
                Cancel
              </button>
              <button
                className="px-3 py-2 mt-2  text-center bg-indigo-500 rounded-md  ring-slate-500 hover:ring-2"
                onClick={() => {
                  addComment();
                  setCmt("");
                }}
                disabled={!utils.checkUser(currentUser)}
              >
                Comment
              </button>
            </div>
          </div>
          <CommentList FID={blog.FID} />
        </div>
      </div>
    )
  );
};

export default BlogDetails;
