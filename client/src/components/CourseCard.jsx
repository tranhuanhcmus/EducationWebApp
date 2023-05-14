import React from "react";

import Img from "./Img";
import Button from "./Button";
import List from "./List";
import { Link, useNavigate } from "react-router-dom";
import { getImage } from "../utils/fetchData";
const CourseCard = (props) => {
  const navigate = useNavigate();
  const [courseImgs, setCourseImgs] = React.useState("");
  React.useEffect(() => {
    const loadImage = async () => {
      const newImage = await getImage(props.IMG);
      setCourseImgs(newImage);
    };

    loadImage();
  }, [props]);
  const info = { PRICE: `$ ${props?.PRICE}.00`, CATEGORY: props.CATEGORY };
  return (
    <>
      <div className={props.className}>
        <div
          className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-[100%]"
          onClick={() => {
            navigate(`/coursesdetails/${props.CID}`, {
              state: {
                CATEGORY: props?.CATEGORY,
                CID: props.CID,
                COURESENAME: props?.COURESENAME,
                DESCRIPTION: props?.DESCRIPTION,
                OWNERNAME: props?.OWNERNAME,
                PRICE: props?.PRICE,
                IMG: props?.IMG,
              },
            });
          }}
        >
          <Img
            src={courseImgs}
            className="h-[103px] md:h-[auto] max-h-[103px] object-cover rounded-[10px] w-[auto] sm:w-[auto]"
            alt="image"
          />
          <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
            <List
              className="font-inter text-gray_900 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              {props.COURESENAME}
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
              {VND.format(props.PRICE)}
            </List>
          </div>
        </div>
        <Button
          className="bg-red_50 flex h-[44px] items-center justify-center p-[10px] rounded-[6px] w-[44px] cursor-pointer"
          onClick={() => {
            props.addCourseHandler(
              props.COURESENAME,
              props.IMG,
              props.PRICE,
              props.CID
            );
          }}
        >
          <Img src="../../public/imgBag.svg" className="h-[24px]" alt="bag" />
        </Button>
      </div>
    </>
  );
};

CourseCard.defaultProps = {
  image: "/anh5.png",
  //NAME: "Ielts 3.0-5.0",
  PRICE: "40",
};

export default CourseCard;
