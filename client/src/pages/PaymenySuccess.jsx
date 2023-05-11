import React from "react";

import Img from "../components/Img";
import Button from "../components/Button";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

const SuccessfulPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-red_50 flex flex-col font-inter items-center justify-center mx-auto md:px-10 sm:px-5 px-[446px] py-[230px] self-stretch w-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-start justify-start px-12 md:px-5 py-[59px] rounded-[20px] shadow-bs w-[548px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  src="../img_completed1.svg"
                  className="h-[180px] w-[180px]"
                  alt="completedOne"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text className="font-bold text-2xl md:text-[22px] text-bluegray_800 text-center sm:text-xl w-auto">
                    Payment Success
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-center w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start self-stretch w-auto">
                  <Img
                    src="../img_arrowleft_indigo_400.svg"
                    className="h-5 w-5"
                    alt="arrowleft"
                  />
                  <Text
                    onClick={() => {
                      navigate("/");
                    }}
                    className="font-medium text-center text-indigo_400 text-sm w-auto"
                  >
                    Back to Sign in
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulPage;
