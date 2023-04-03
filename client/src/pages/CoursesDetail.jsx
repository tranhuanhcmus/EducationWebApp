import React from "react";

import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import List from "../components/List";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

const Data = [
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
  { src: "/anh4.png", namecourse: "Introduction", time: "15:00" },
];

const CoursesDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
          <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div className="bg-gray_200 flex items-start justify-start max-w-[1280px] mx-[auto] md:px-[20px] px-[30px] py-[25px] rounded-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[68px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left tracking-[0.48px] w-[auto]"
                    variant="body4"
                  >
                    Home | Courses | Course Details
                  </Text>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                    <div className="h-[455px] relative w-[100%]">
                      <Img
                        src="./public/anh4.png"
                        className="h-[455px] m-[auto] object-cover rounded-[20px] w-[100%]"
                        alt="pexelsvanessaga"
                      />
                      <Button className="absolute bg-red_300 flex h-[60px] inset-[0] items-center justify-center m-[auto] rounded-[50%] w-[60px]">
                        <Img
                          src="images/img_play_white_a700.svg"
                          className="h-[16px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      IELTS band 5 - for Standard 3 Students | Episode 2
                    </Text>
                  </div>
                </div>
                <div className="overflow-auto flex sm:flex-1 flex-col gap-[15px] h-[545px] md:h-[auto] items-start justify-between sm:w-[100%] w-[382px]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Course Playlists
                  </Text>
                  <div className="flex items-start justify-start w-[100%]">
                    <List
                      className="flex-col gap-[16px] grid items-start w-[100%]"
                      orientation="vertical"
                    >
                      {Data.map((leucture) => (
                        <div className="bg-white_A700 hover:cursor-pointer flex flex-1 items-start justify-start hover:my-[0] my-[0] p-[10px] rounded-[10px] hover:shadow-bs w-[100%]">
                          <div className="flex flex-row gap-[10px] items-center justify-start self-stretch w-[auto]">
                            <Img
                              src={leucture.src}
                              className="h-[50px] md:h-[auto] object-cover rounded-[5px] w-[80px]"
                              alt="image"
                            />
                            <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-semibold text-black_900 text-left w-[auto]"
                                variant="body3"
                              >
                                {leucture.namecourse}
                              </Text>
                              <Text
                                className="text-deep_orange_400 text-left w-[auto]"
                                variant="body5"
                              >
                                {leucture.time}
                              </Text>
                            </div>
                          </div>
                        </div>
                      ))}
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start max-w-[1280px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[25px] items-start justify-start max-w-[840px] w-[100%]">
              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Course Details
                </Text>
                <Text
                  className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Certification
                </Text>
                <Text
                  className="font-normal leading-[30.00px] md:max-w-[100%] max-w-[840px] not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Who this course is for
                </Text>
                <Text
                  className="font-normal leading-[30.00px] md:max-w-[100%] max-w-[840px] not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  <>What you&#39;ll learn in this course:</>
                </Text>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[21px] items-start justify-start px-[20px] py-[26px] rounded-[10px] w-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-deep_orange_400 text-right w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    $49.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Instructor
                  </Text>
                  <a
                    className="font-semibold text-[20px] text-black_900 text-right underline w-[auto]"
                    href="javascript:"
                  >
                    Wade Warren
                  </a>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Ratings
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="h-[16px] w-[92px]"
                    alt="mobile"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Durations
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    10 Days
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Lessons
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Quizzes
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    5
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Language
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Access
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                  >
                    Lifetime
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer bg-red_300 cursor-pointer font-medium px-[126px] sm:px-[20px] md:px-[40px] py-[20px] rounded-[5px] text-[18px] text-center text-white_A700 w-[100%]"
                onClick={() => navigate("/eduvicoursespricing")}
              >
                Purchase Course
              </Button>
            </div>
          </div>
        </div>
        <div className="flex font-metropolis items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1280px] mx-[auto] w-[100%]">
            <Text
              className="font-bold text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Similar Courses
            </Text>
            <div className="flex font-inter items-start justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                {new Array(4).fill({}).map((props, index) => (
                  <React.Fragment key={`CourseCard${index}`}>
                    <CourseCard
                      className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-row items-end justify-between p-[15px] rounded-[10px] hover:shadow-bs1 shadow-bs1 hover:w-[100%] w-[100%]"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetails;
