import React from "react";

import Img from "./Img";
import Button from "./Button";
import Text from "./Text";
import List from "./List";

const CourseCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-[100%]">
          <Img
            src={props?.image}
            className="h-[103px] md:h-[auto] max-h-[103px] object-cover rounded-[10px] w-[auto] sm:w-[auto]"
            alt="image"
          />
          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
            <List
              className="font-inter text-gray_900 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.courseName}
            </List>
            <Img
              src="../../public/anh2.svg"
              className="h-[20px] w-[112px]"
              alt="star"
            />
            <List
              className="font-inter text-deep_orange_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.price}
            </List>
          </div>
        </div>
        <Button className="bg-red_50 flex h-[44px] items-center justify-center p-[10px] rounded-[6px] w-[44px]">
          <Img src="../../public/imgBag.svg" className="h-[24px]" alt="bag" />
        </Button>
      </div>
    </>
  );
};

CourseCard.defaultProps = {
  image: "/anh5.png",
  courseName: "Ielts 3.0-5.0",
  price: "$40.00",
};

export default CourseCard;
