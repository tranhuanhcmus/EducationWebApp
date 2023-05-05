import React, { useRef, useCallback } from "react";

import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import List from "../components/List";
import Text from "../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "./../utils/axios";
import { useParams, useSearchParams } from "react-router-dom";
import { getVideo } from "../utils/fetchData";

import ReactPlayer from "react-player";
import Loading from "../utils/Loading";
import Example from "./example";
import GoogleForm from "./googleform";
import { Rating } from "@mui/material";

const img = "/anh4.png";

// function secondsToHms(d) {
//   d = Number(d);
//   var h = Math.floor(d / 3600);
//   var m = Math.floor((d % 3600) / 60);
//   var s = Math.floor((d % 3600) % 60);

//   var hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
//   var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
//   var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
//   return hDisplay + mDisplay + sDisplay;
// }

// courses.forEach((item) => {
//   if (item.type === "video" || item.type === "listening") {
//     const videoElement = document.createElement("video");
//     videoElement.src = item.video;
//     videoElement.addEventListener("loadedmetadata", () => {
//       item.time = `${secondsToHms(
//         parseInt(videoElement.duration, 10)
//       ).toString()}`;
//     });
//   }
// });

const CoursesDetails = () => {
  const params = useParams();
  console.log(params);
  const [searchParams, setSearchParams] = useSearchParams("");
  const navigate = useNavigate();
  const [valueButton, setValue] = React.useState(parseInt(params.lessonId));
  const myref = useRef([]);

  const [currentVideo, setCurrentVideo] = React.useState(0);

  const [courses, setCourses] = React.useState([]);
  const [bending, setBending] = React.useState(false);

  const playNextVideo = () => {
    if (parseInt(params.lessonId) >= 0 && currentVideo < courses.length) {
      setCurrentVideo(parseInt(params.lessonId));
    }
  };

  const [videoURL, setVideoURL] = React.useState("");

  const fetchData = useCallback(async () => {
    setBending(true);
    const data_courses = await makeRequest({
      url: `/course/${params.courseId}`,
      method: "get",
    });
    console.log(data_courses.data.length);
    if (data_courses.data.length > 0) {
      setCourses(() => {
        return data_courses.data;
      });

      playNextVideo();
      if (parseInt(params.lessonId) >= 0) {
        const URL = await getVideo(
          data_courses.data[parseInt(params.lessonId)].VIDEO
        );
        setVideoURL(URL);
      } else {
        const URL = await getVideo(data_courses.data[0].VIDEO);
        setVideoURL(URL);
      }
      setValue(params.lessonId);
    }

    setBending(false);
  }, []);
  React.useEffect(() => {
    const indetiPIEr = setTimeout(async () => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(indetiPIEr);
    };
  }, [fetchData]);

  React.useEffect(() => {
    const indetiPIEr = setTimeout(async () => {
      setBending(true);
      const URL = await getVideo(courses[parseInt(params.lessonId)].VIDEO);

      setVideoURL(URL);

      playNextVideo();

      setValue(params.lessonId);

      setBending(false);
    }, 500);
    return () => {
      clearTimeout(indetiPIEr);
    };
  }, [params.lessonId]);

  console.log(videoURL);

  return !bending ? (
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
                  {parseInt(params.lessonId) >= 0 ? (
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="aspect-w-16 aspect-h-9 h-[455px] relative w-[100%] overflow-auto">
                        <ReactPlayer
                          className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                          height="100%"
                          width="100%"
                          playing={true}
                          controls
                          onEnded={() => {
                            if (currentVideo < courses.length - 1) {
                              navigate(
                                `/coursesdetails/${params.courseId}/${
                                  currentVideo + 1
                                }`
                              );
                            }
                          }}
                          url={videoURL}
                        />
                      </div>

                      <Button
                        className=" self-center py-3 px-2 bg-indigo-600 font-note font-bold md:text-sm text-md text-white uppercase rounded-3xl md:w-[25%] w-[200px]  hover:bg-deep_purple_A201 hover:ring-yellow-400 ring-2 "
                        onClick={() => {
                          const CID = params.courseId;
                          const LID = params.lessonId;
                          navigate(`/lesson/${CID}`, {
                            state: {
                              CID,
                              LID,
                              author: "Harry Bui",
                              courseImage: "bth.jpg",
                            },
                          });
                        }}
                      >
                        Move to lesson
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="h-[455px] relative w-[100%]">
                        <ReactPlayer
                          className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                          height="100%"
                          width="100%"
                          playing={true}
                          controls
                          url={videoURL}
                        />
                      </div>
                      <Text
                        className="text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Introduction
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
                      {courses.map((leucture, index) => (
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

                            navigate(
                              `/coursesdetails/${params.courseId}/${index}`
                            );
                          }}
                          className={`hover:cursor-pointer flex flex-1 items-start justify-start hover:my-[0] my-[0] p-[10px] rounded-[10px] hover:shadow-bs w-[100%] ${
                            valueButton === index.toString()
                              ? "choose"
                              : "bg-white"
                          }`}
                        >
                          <div className="flex flex-row gap-[10px] items-center justify-start self-stretch w-[auto]">
                            <Img
                              src={img}
                              className="h-[50px] md:h-[auto] object-cover rounded-[5px] w-[80px]"
                              alt="image"
                            />
                            <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-semibold text-black_900 text-left w-[auto]"
                                variant="body3"
                              >
                                {leucture.NAME}
                              </Text>
                              <Text
                                className="text-deep_orange_400 text-left w-[auto]"
                                variant="body5"
                              >
                                {leucture.DURATION}
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
                  Course Details - Writing Band 5.0
                </Text>
                <Text
                  className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  <>
                    Dear our beloved students at PIE English, First and
                    foremost, PIE English would like to express our sincerest
                    gratude to all of our students for believing and choosing
                    TW. This publication, Junior. Students Workbook, you are
                    holding right now is a brilliant combination of carefuly
                    selected intellectual products, created by none other than
                    our team at PIE English. As an embodiment of our mission
                    which is to not only help our students improve their English
                    and develop the language beyond classroom context but also
                    enable them to conquer the IELTS exam, this workbook shall
                    act as a constant companion to allow students to make the
                    most of in-class lessons. Therefore, PIE truly hopes that
                    our students can allocate their time and energy to complete
                    all tasks provided in this workbook so as to achieve the
                    perfect result for each and every course they take at PIE
                    English. Essentially complementary to this workbook is a
                    splendidly crafted CELTA-standard visual syllabus, a product
                    jointly owned by an elite team of teachers at PIE English
                    and critically reviewed under the guidance and supervision
                    of numerous IELTS experts, masters in linguistics, masters
                    in pedagogy and many other holders of bachelor's and
                    master's degree in Education who had studied in England and
                    Australia. We will use our last word to thank you for
                    placing your trust in us, whereby becoming an integral part
                    of our success. We hope that you enjoy your time with us.
                    PIE English Golden Standard for IELTS Preparation
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
                  Get PIE certificate by completing entire course
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
                  This course is suitable for individuals who have scored
                  between 4.0 and 5.0 on the IELTS test, or for those who have
                  taken a placement test and have been assessed at this level.
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
                    Vocabulary: You will learn new words and phrases that are
                    commonly used in academic, professional, or immigration
                    contexts.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Reading: You will practice reading academic and general
                    texts, and develop strategies for skimming and scanning to
                    improve your reading speed and comprehension.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Writing: You will learn how to write effective essays and
                    reports, with a focus on organization, coherence, and
                    clarity.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Listening: You will practice listening to academic and
                    general texts, and develop strategies for understanding
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
                    199.000 đ
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
                    Harry Bui
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Ratings
                  </Text>
                  <Rating value={4} />
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
  ) : (
    <Loading />
  );
};

export default CoursesDetails;
