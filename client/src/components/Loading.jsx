import React from "react";
import Dialog from "../utils/Dialog";

const Loading = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  return (
    <div>
      <Dialog open={open} handleClose={handleClose} msg={"...Loading"} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setOpen(true)}
      >
        Button
      </button>
    </div>
  );
};

export default Loading;
