import React from "react";

import Img from "./Img";
import Button from "./Button";
import Text from "./Text";
const ClassCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
          <Img
            src={props?.standardCountImage}
            className="h-[50px] w-[50px]"
            alt="download"
          />
          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
            <Text
              className="font-inter text-center text-gray_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              {props?.standard}
            </Text>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-3 rounded-full dark:bg-blue-500 text-xs text-center"
                style={{ width: "45%" }}
              ></div>
            </div>

            <Text
              className="font-inter font-normal leading-[30.00px] md:max-w-[100%] max-w-[260px] not-italic text-center text-gray_700"
              variant="body4"
            >
              {props?.studyDetail}
            </Text>
          </div>
        </div>
        <Button className="border-[1px] border-red_300 border-solid cursor-pointer font-inter font-medium min-w-[161px] sm:px-[20px] px-[31px] py-[12px] rounded-[5px] text-[16px] text-center text-red_300 w-[auto]">
          Class Details
        </Button>
      </div>
    </>
  );
};

ClassCard.defaultProps = {
  standardCountImage: "../../public/img_download.svg",
  standard: "Band 3.0-5.0",
  studyDetail: "Academy by Nguyen Van A",
};

export default ClassCard;
