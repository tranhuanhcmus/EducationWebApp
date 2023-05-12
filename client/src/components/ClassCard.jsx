import React from "react";

import Img from "./Img";
import Button from "./Button";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import { getImage } from "../utils/fetchData";
const ClassCard = (props) => {
  const navigate = useNavigate();
  const [courseImgs, setCourseImgs] = React.useState("");
  React.useEffect(() => {
    const loadImage = async () => {
      const newImage = await getImage(props.IMG);
      setCourseImgs(newImage);
    };
    loadImage();
  }, []);

  return (
    <>
      <div className={props.className}>
        {props.Teacher && (
          <div className="w-full flex items-end justify-end ">
            <div
              className="items-start p-[10px] rounded-[6px] w-[44px] cursor-pointer"
              onClick={props.onDeleteCourse}
            >
              <Img src="./Delete.svg" className="" alt="download"></Img>
            </div>
          </div>
        )}

        <div
          className="flex flex-col gap-[20px] items-center justify-start w-[100%]"
          onClick={() => {
            {
              props.Teacher
                ? navigate(`/TeacherCourseDetails/${props.CID}`)
                : navigate(`/coursesdetails/${props.CID}`, {
                    state: {
                      CATEGORY: props?.CATEGORY,
                      CID: props.CID,
                      COURESENAME: props?.NAME,
                      DESCRIPTION: props?.DESCRIPTION,
                      OWNERNAME: props?.AUTHOR,
                      PRICE: props?.PRICE,
                      IMG: props?.IMG,
                    },
                  });
            }
          }}
        >
          <Img
            src={courseImgs}
            className="w-full object-contain"
            alt="download"
          />
          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
            <Text
              className="font-inter text-center text-gray_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              {props?.NAME}
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
              {props?.DESCRIPTION}
            </Text>
          </div>
        </div>
        <Button
          className="border-[1px] border-red_300 border-solid cursor-pointer font-inter font-medium min-w-[161px] sm:px-[20px] px-[31px] py-[12px] rounded-[5px] text-[16px] text-center text-red_300 w-[auto]"
          onClick={() => navigate(`/coursesdetails/${props.CID}`)}
        >
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
