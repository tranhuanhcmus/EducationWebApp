import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const Dialog = ({ open, handleClose, msg }) => {
  return (
    <div
      className={`${
        !open ? `hidden` : `fixed`
      } inset-0 bg-slate-500/50 flex justify-center items-center z-10`}
    >
      <div className="min-w-[400px] min-h-[40vh] bg-white rounded-md  overflow-hidden flex flex-col shadow-md border-solid border-2 border-black">
        <div className="bg-blue-500 text-black w-full p-4 font-bold uppercase">
          Message
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <h1 className="uppercase font-bold">{msg}</h1>
        </div>
        <div className="p-3 flex justify-end items-center">
          <button
            className="bg-transparent hover:cursor-pointer text-blue-700 py-1 px-2 rounded-sm uppercase"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
