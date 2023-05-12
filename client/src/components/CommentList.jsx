import { useState, useEffect } from "react";
import { getImage } from "../utils/fetchData";
import { useQuery } from "react-query";
import { makeRequest } from "./../utils/axios";

const CommentList = ({ CID, FID }) => {
  const {
    isLoading,
    data: comments,
    isError,
    error,
    refetch,
  } = useQuery(
    "comments",
    () => {
      if (CID != null)
        return makeRequest({
          url: `/ccmt/${CID}`,
          method: "get",
        });
      if (FID != null) {
        return makeRequest({
          url: `/fcmt/${FID}`,
          method: "get",
        });
      }
    },
    {
      select: (data) =>
        data.data.sort((a, b) => new Date(b.CMT_TIME) - new Date(a.CMT_TIME)),
      refetchOnMount: true,
    }
  );

  const [images, setImages] = useState([]);
  useEffect(() => {
    refetch();
  }, [CID, FID]);
  useEffect(() => {
    const loadImages = async () => {
      setImages([]);
      if (comments) {
        for (var i = 0; i < comments.length; i++) {
          const image = await getImage(`${comments[i].ID}.png`);
          setImages((images) => [...images, image]);
        }
      }
    };
    loadImages();
  }, [comments]);
  if (isLoading) {
    return <h1 className="w-full text-center px-3 py-2">Loading</h1>;
  }
  if (isError) {
    return <h1 className="w-full text-center px-3 py-2">{error.message}</h1>;
  }

  return comments.length > 0
    ? comments.map((comment, index) => {
        return (
          <div
            className="container p-2 my-2 border-indigo-400/50 border-2 border-dashed "
            key={comment.CMTID}
          >
            <div className="header flex justify-between">
              <div className="user flex items-center gap-3">
                <img
                  src={images[index]}
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
            <div className="actions flex gap-4 items-center p-3 justify-end">
              <div>
                <i className="fa-regular fa-thumbs-up"></i>
              </div>
              <div>
                <i className="fa-regular fa-thumbs-up rotate-180"></i>
              </div>
            </div>
          </div>
        );
      })
    : "no comments";
};

export default CommentList;
