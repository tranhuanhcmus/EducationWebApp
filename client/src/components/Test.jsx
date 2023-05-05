import { useState } from "react";
import { useQuery } from "react-query";
import { makeRequest } from "./../utils/axios";
import { Button } from "@mui/material";
import CommentList from "./CommentList";

const Test = () => {
  const [cmt, setCmt] = useState("");

  const { isLoading, data, isError, error } = useQuery("comments", () => {
    return makeRequest({
      url: `/ccmt/113`,
      method: "get",
    });
  });
  const handleComment = async () => {
    const currentDate = (+new Date()).toString(36);
    const CMTID = currentDate + CID + currentUser.ID;
    const Content = cmt;

    const res = await makeRequest({
      url: "/accmt",
      method: "post",
      data: {
        CmtID: CMTID.slice(0, 22),
        Content: Content,
        CID: CID,
        ID: currentUser.ID,
      },
    });
  };

  if (isLoading) {
    return <h1 className="w-full text-center px-3 py-2">Loading</h1>;
  }
  if (isError) {
    return <h1 className="w-full text-center px-3 py-2">{error.message}</h1>;
  }

  return (
    <div className="text-lg font-note font-[300] mt-3 text-justify md:m-4 m-6">
      <div className="mb-3">
        <textarea
          onChange={(e) => setCmt(e.target.value)}
          className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"
        ></textarea>
        <div className="flex justify-end">
          <Button
            sx={{ ml: "auto" }}
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
        </div>
      </div>

      {isLoading ? "loading" : <CommentList comments={data?.data} />}
    </div>
  );
};

export default Test;
