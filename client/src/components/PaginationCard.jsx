import React from "react";

import Img from "./Img";
import Button from "./Button";
import Text from "./Text";
import List from "./List";

const PaginationCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          onClick={props.handleprev}
          className="bg-white_A700 flex h-[44px] items-center justify-center p-[10px] rounded-[6px] w-[44px]"
        >
          <Img src="../public/imgLeft.svg" className="" alt="arrowleft" />
        </Button>
        <List
          className="font-inter font-medium text-gray_900 text-left w-[auto]"
          variant="body4"
        >
          {props?.page}
        </List>
        <Button className="bg-white_A700 cursor-pointer font-inter font-medium h-[40px] leading-[normal] px-[15px] py-[9px] rounded-[8px] text-[18px] text-bluegray_800 text-center w-[39px]">
          {props?.one}
        </Button>
        <List
          className="font-inter font-medium text-gray_900 text-left w-[auto]"
          variant="body4"
        >
          {props?.ofCounter}
        </List>
        <Button
          onClick={props.handlenext}
          className="bg-white_A700 flex h-[44px] items-center justify-center p-[10px] rounded-[6px] w-[44px]"
        >
          <Img src="../public/imgRight.svg" className="" alt="arrowright" />
        </Button>
      </div>
    </>
  );
};

PaginationCard.defaultProps = { page: "Page", one: "1", ofCounter: "of 03" };

export default PaginationCard;
