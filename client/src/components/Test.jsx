import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "./../utils/axios";
import { Button } from "@mui/material";
import CommentList from "./CommentList";
import { useSelector } from "react-redux";

const Test = () => {
  const [cmt, setCmt] = useState("");
  const currentUser = useSelector((state) => state.auth.user);
  const queryClient = useQueryClient();

  const saveComment = async () => {
    const currentDate = (+new Date()).toString(36);
    const CMTID = currentDate + 113 + currentUser.ID;
    const Content = cmt;

    const res = await makeRequest({
      url: "/accmt",
      method: "post",
      data: {
        CmtID: CMTID.slice(0, 22),
        Content: Content,
        CID: 113,
        ID: currentUser.ID,
      },
    });
    setCmt("");
    return res;
  };

  const { mutate: addComment } = useMutation(saveComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return (
    <div className="text-lg font-note font-[300] mt-3 text-justify md:m-4 m-6">
      <div className="mb-3">
        <textarea
          value={cmt}
          onChange={(e) => setCmt(e.target.value)}
          className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"
        ></textarea>
        <div className="flex justify-end">
          <Button sx={{ ml: "auto" }} variant="contained" onClick={addComment}>
            Comment
          </Button>
        </div>
      </div>

      <CommentList />
    </div>
  );
};

export default Test;
