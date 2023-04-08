import { IconButton } from "@mui/material";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";

const Comment = () => {
  return (
    <div className="container p-2 my-2 border-indigo-400/50 border-2 border-dashed ">
      <div className="header pb-2 flex items-center border-b-2 border-slate-600">
        <div className="user flex items-center flex-1">
          <img
            className="w-10 h-10 rounded-full ring-2 ring-indigo-600 object-center object-contain"
            src="/anh4.png"
            alt="user avater"
          />
          <span className="text-xl font-Bebas font-semibold ml-2">
            Harry Potter
          </span>
        </div>
        <div className="actions flex items-center ">
          <IconButton
            sx={{ "&:hover": { bgcolor: "transparent", color: "indigo" } }}
          >
            <span className="text-xl font-roboto font-semibold mr-1">
              reply
            </span>
            <ReplyIcon />
          </IconButton>
        </div>
      </div>

      <div className="content my-2 ml-6 p-2 bg-slate-400/50 rounded-md  font-roboto">
        Love it! the tips in video and quiz very helpful ❤️
      </div>
    </div>
  );
};

export default Comment;
