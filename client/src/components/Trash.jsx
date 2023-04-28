import React from "react";

import Button from "./Button";
import Text from "./Text";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdropTeacher" onClick={props.HandleFalse} />;
};

const TrashPage = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop HandleFalse={props.HandleFalse} />,
        document.getElementById("root_1")
      )}
      {ReactDOM.createPortal(
        <>
          <div className=" modalTeacher bg-white_A700 flex flex-col gap-6 items-center justify-center p-6 md:px-5 rounded-[10px] shadow-bs w-[404px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="font-semibold text-bluegray_900 text-left text-lg w-auto">
                Are You Sure You Want to Delete Item?
              </Text>
            </div>
            <div className="flex flex-row gap-4 h-[34px] md:h-auto items-center justify-center w-full">
              <Button
                className="border border-blue_A700 hover:bg-sky-700 border-solid cursor-pointer flex-1 font-medium px-3 py-1.5 rounded-md text-blue_A700 text-center text-sm w-full"
                shape="RoundedBorder6"
                size="PaddingAll10"
                variant="OutlineBlueA700"
                onClick={props.HandleFalse}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#576CBC] hover:bg-sky-700 cursor-pointer flex-1 font-medium px-3 py-1.5 rounded-md text-center text-sm text-white_A700 w-full"
                shape="RoundedBorder6"
                size="PaddingAll10"
                variant="FillBlueA700"
                onClick={props.onDeleteCourse}
              >
                Delete
              </Button>
            </div>
          </div>
        </>,
        document.getElementById("root_2")
      )}
    </React.Fragment>
  );
};

export default TrashPage;
