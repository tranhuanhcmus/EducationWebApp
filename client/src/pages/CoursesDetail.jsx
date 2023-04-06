import React, { useRef } from "react";

import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import List from "../components/List";
import Text from "../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Example from "./example";
import GoogleForm from "./googleform";

const Data = [
  {
    src: "/anh4.png",
    namecourse: "Introduction",
    time: "11:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-1",
    time: "12:00",
    video: "../../public/video1.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-2",
    time: "13:00",
    video: "../../public/video2.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-3",
    time: "14:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-4",
    time: "15:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-5",
    time: "16:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-6",
    time: "17:00",
    video: "../../public/flowbite.mp4",
    type: "text",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-7",
    time: "18:00",
    video: "../../public/flowbite.mp4",
    type: "form",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-8",
    time: "19:00",
    video: "../../public/video3.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-9",
    time: "15:00",
    video: "../../public/video4.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-10",
    time: "15:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Introduction-11",
    time: "15:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
];

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
  return hDisplay + mDisplay + sDisplay;
}

Data.map((item) => {
  if (item.type === "video") {
    const videoElement = document.createElement("video");
    videoElement.src = item.video;
    //Data[index].time = `00:${parseInt(videoElement.duration, 10).toString()}`;
    videoElement.addEventListener("loadedmetadata", () => {
      item.time = `${secondsToHms(
        parseInt(videoElement.duration, 10)
      ).toString()}`;
    });
  }
});

const CoursesDetails = () => {
  const params = useParams();

  const navigate = useNavigate();
  const [valueButton, setValue] = React.useState(parseInt(params.courseId));
  const myref = useRef([]);

  const [currentVideo, setCurrentVideo] = React.useState(0);

  const playNextVideo = () => {
    if (parseInt(params.courseId) >= 0 && currentVideo < Data.length) {
      setCurrentVideo(parseInt(params.courseId));
    }
  };
  const CourseHandle = (e) => {
    // if (e.target.value !== valueButton) {
    //   //setValue(e.target.value);

    // }
    console.log(e);
  };
  React.useEffect(() => {
    const indetifier = setTimeout(() => {
      playNextVideo();

      setValue(params.courseId);
    }, 500);
    return () => {
      clearTimeout(indetifier);
    };
  }, [params.courseId]);

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
          <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div className="bg-gray_200 flex items-start justify-start max-w-[1280px] mx-[auto] md:px-[20px] px-[30px] py-[25px] rounded-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[30px] gap-[30px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left tracking-[0.48px] w-[auto]"
                    variant="body4"
                  >
                    Home | Courses | Course Details
                  </Text>
                  {parseInt(params.courseId) >= 0 ? (
                    parseInt(params.courseId) < 4 ? (
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="aspect-w-16 aspect-h-9 h-[455px] relative w-[100%] overflow-auto">
                          {/* <iframe
                        className="w-full aspect-video md:aspect-square"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        autoplay
                        controls
                      ></iframe> */}

                          {/* <video
                          className="w-100% h-100% max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                          autoPlay
                          controls
                          onEnded={playNextVideo}
                          url={Data[currentVideo].video}
                        >
                          <source
                            src={Data[currentVideo].video}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video> */}
                          <ReactPlayer
                            className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                            height="100%"
                            width="100%"
                            playing={true}
                            controls
                            onEnded={() => {
                              if (currentVideo < Data.length - 1) {
                                navigate(`/coursesdetails/${currentVideo + 1}`);
                              }
                            }}
                            url={Data[currentVideo].video}
                          />
                        </div>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          {Data[parseInt(params.courseId)].namecourse}
                        </Text>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="aspect-w-16 aspect-h-9 h-[455px] relative w-[100%] overflow-auto">
                          {Data[parseInt(params.courseId)].type === "video" && (
                            <ReactPlayer
                              className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                              height="100%"
                              width="100%"
                              playing={true}
                              controls
                              onEnded={() => {
                                if (currentVideo < Data.length - 1) {
                                  navigate(
                                    `/coursesdetails/${currentVideo + 1}`
                                  );
                                }
                              }}
                              url={Data[currentVideo].video}
                            />
                          )}
                          {Data[parseInt(params.courseId)].type === "text" && (
                            <Example></Example>
                          )}
                          {Data[parseInt(params.courseId)].type === "form" && (
                            <GoogleForm />
                          )}
                        </div>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          {Data[parseInt(params.courseId)].namecourse}
                        </Text>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="h-[455px] relative w-[100%]">
                        {/* <iframe
                        className="w-full aspect-video md:aspect-square"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        autoplay
                        controls
                      ></iframe> */}

                        <video
                          className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700l overflow-hidden"
                          autoPlay
                          controls
                        >
                          <source src={Data[0].video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <Text
                        className="text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        {Data[0].namecourse}
                      </Text>
                    </div>
                  )}
                </div>
                <div className=" flex sm:flex-1 flex-col gap-[15px] h-[545px] md:h-[auto] items-start justify-between sm:w-[100%] w-[382px]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Course Playlists
                  </Text>
                  <div className="overflow-auto flex items-start justify-start w-[100%]">
                    <List
                      className="flex-col gap-[16px] grid items-start w-[100%]"
                      orientation="vertical"
                    >
                      {Data.map((leucture, index) => (
                        <div
                          ref={(element) => {
                            myref.current[index] = element;
                          }}
                          key={index}
                          onClick={() => {
                            setValue(index.toString());
                            myref.current[index].scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });

                            //location.href = `/coursesdetails/${index}`;
                            navigate(`/coursesdetails/${index}`);
                          }}
                          className={`hover:cursor-pointer flex flex-1 items-start justify-start hover:my-[0] my-[0] p-[10px] rounded-[10px] hover:shadow-bs w-[100%] ${
                            valueButton === index.toString()
                              ? "choose"
                              : "bg-white"
                          }`}
                        >
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
                    This course is fully up-to-date with React 18 (the latest
                    version of React)! It was completely updated and re-recorded
                    from the ground up - it teaches the very latest version of
                    React with all the core, modern features you need to know!
                    --- This course also comes with two paths which you can
                    take: The "complete" path (full 40h course) and the
                    "summary" path (~4h summary module) - you can choose the
                    path that best fits your time requirements! :- --- React.js
                    is THE most popular JavaScript library you can use and learn
                    these days to build modern, reactive user interfaces for the
                    web. This course teaches you React in-depth, from the ground
                    up, step by step by diving into all the core basics,
                    exploring tons of examples and also introducing you to
                    advanced concepts as well. You'll get all the theory, tons
                    of examples and demos, assignments and exercises and tons of
                    important knowledge that is skipped by most other resources
                    - after all, there is a reason why this course is that huge!
                    : And in case you don't even know why you would want to
                    learn React and you're just here because of some ad or "the
                    algorithm" - no worries: ReactJS is a key technology as a
                    web developer and in this course I will also explain WHY
                    it's that important!
                    <br />
                    Get Udemy certificate by completing entire course
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
                  Get Udemy certificate by completing entire course
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
                  You don't need any prior React knowledge! This course starts
                  with zero knowledge assumed! All you need is basic web
                  development and JavaScript knowledge (though the course even
                  includes a brief JavaScript refresher to ensure that we're all
                  on the same page!). Check out the full curriculum, the free
                  preview videos and join the course risk-free thanks to the
                  30-day money-back guarantee!
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
                  <Link
                    to="/Author"
                    className="font-semibold text-[20px] text-black_900 text-right underline w-[auto]"
                  >
                    Wade Warren
                  </Link>
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
                      className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-row items-end justify-between p-[15px] rounded-[10px] hover:shadow-bs1 shadow-bs w-full"
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
