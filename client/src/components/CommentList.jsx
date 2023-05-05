import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return comments.length > 0
    ? comments.map((comment) => {
        return (
          <div
            className="container p-2 my-2 border-indigo-400/50 border-2 border-dashed "
            key={comment.CMTID}
          >
            <div className="header flex justify-between">
              <div className="user flex items-center gap-3">
                <img
                  src="/anh4.png"
                  alt="user Avatar"
                  className="rounded-full w-10 h-10 object-cover object-center"
                />
                <div className="flex-col justify-center">
                  <p className="font-semibold">@{comment.NAME}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(comment.CMT_TIME).toLocaleString()}
                  </p>
                </div>
              </div>
              <button className="rounded-full p-1">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>

            <p className="content my-2 ml-6 p-2    font-roboto">
              {comment.CONTENT}
            </p>
            <hr />
            <div className="actions flex gap-4 items-center p-3">
              <div>
                15 <i className="fa-regular fa-thumbs-up"></i>
              </div>
              <div>
                15 <i className="fa-regular fa-thumbs-up rotate-180"></i>
              </div>
            </div>
          </div>
        );
      })
    : "no comments";
};

export default CommentList;
