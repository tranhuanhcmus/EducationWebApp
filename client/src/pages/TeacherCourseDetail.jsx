import React, { useRef } from "react";

import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import List from "../components/List";
import Text from "../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Example from "./example";
import GoogleForm from "./googleform";
import CustomFormPage from "../components/CustomForm";
import TrashPage from "../components/Trash";
import EditText from "../components/EditText";
const Data = [
  {
    src: "/anh4.png",
    namecourse: "Introduction",
    time: "7:37",
    video: "/video/lesson1.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 01",
    time: "12:00",
    video: "../../public/video1.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Listening 02",
    time: "13:00",
    video: "../../public/video2.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 02",
    time: "14:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Listening 03",
    time: "15:00",
    video: "../../public/video4.mp4",
    type: "listening",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 03",
    time: "16:00",
    video: "../../public/flowbite.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 04",
    time: "17:00",
    video: "../../public/flowbite.mp4",
    type: "text",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 04_1",
    time: "18:00",
    video: "../../public/flowbite.mp4",
    type: "form",
  },
  {
    src: "/anh4.png",
    namecourse: "Listening 05",
    time: "19:00",
    video: "../../public/video3.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Reading 05",
    time: "15:00",
    video: "../../public/video4.mp4",
    type: "video",
  },
  {
    src: "/anh4.png",
    namecourse: "Revision 01",
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

Data.forEach((item) => {
  if (item.type === "video" || item.type === "listening") {
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

const TeacherCoursesDetails = () => {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams("");
  const navigate = useNavigate();
  const [valueButton, setValue] = React.useState(parseInt(params.courseId));
  const myref = useRef([]);

  const [currentVideo, setCurrentVideo] = React.useState(0);
  const [courses, setCourses] = React.useState(Data);

  const playNextVideo = () => {
    if (
      parseInt(params.courseId) >= 0 &&
      currentVideo <= courses.length &&
      parseInt(params.courseId) != courses.length
    ) {
      setCurrentVideo(parseInt(params.courseId));
    }
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

  const [detele, setdelete] = React.useState({
    condition: false,
    index: 0,
  });

  const deteletrue = (i) => {
    setdelete({
      condition: true,
      index: i,
    });
  };
  const deletefalse = () => {
    setdelete(false);
  };

  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  const handleRemove = () => {
    setCourses((courses) =>
      courses.filter((course) => courses.indexOf(course) !== detele.index)
    );
    deletefalse();
    if (detele.index < currentVideo) {
      setCurrentVideo(currentVideo - 1);
      navigate(`/testthu/${currentVideo - 1}`);
    }
    if (detele.index === currentVideo && detele.index === courses.length - 1) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...courses];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCourses(copyListItems);
  };

  const [value, setValueInf] = React.useState({
    Price: "",
    Instructor: "",
    Duration: "",
    Lesson: "",
    Quizzes: "",
    Certificate: "",
  });
  console.log(value);

  return (
    <>
      {detele.condition && (
        <TrashPage HandleFalse={deletefalse} onDeleteCourse={handleRemove} />
      )}
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
                  {parseInt(params.courseId) < courses.length ? (
                    parseInt(params.courseId) < 2 ? (
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
                                navigate(`/testthu/${currentVideo + 1}`);
                              }
                            }}
                            url={courses[currentVideo].video}
                          />
                        </div>

                        <Button
                          className=" self-center py-3 px-2 bg-indigo-600 font-note font-bold md:text-sm text-md text-white uppercase rounded-3xl md:w-[25%] w-[200px]  hover:bg-deep_purple_A201 hover:ring-yellow-400 ring-2 "
                          onClick={() => navigate("/lesson/1")}
                        >
                          Move to lesson
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="aspect-w-16 aspect-h-9 h-[455px] relative w-[100%] overflow-auto">
                          {courses[parseInt(params.courseId)].type ===
                            "video" && (
                            <ReactPlayer
                              className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                              height="100%"
                              width="100%"
                              playing={true}
                              controls
                              onEnded={() => {
                                if (currentVideo < courses.length - 1) {
                                  navigate(`/testthu/${currentVideo + 1}`);
                                }
                              }}
                              url={courses[currentVideo].video}
                            />
                          )}
                          {courses[parseInt(params.courseId)].type ===
                            "listening" &&
                            searchParams.get("text") !== "ok" && (
                              <ReactPlayer
                                className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                                height="100%"
                                width="100%"
                                playing={true}
                                controls
                                onEnded={() => {
                                  setSearchParams({ text: "ok" });
                                }}
                                url={courses[currentVideo].video}
                              />
                            )}
                          {searchParams.get("text") === "ok" && <GoogleForm />}
                          {courses[parseInt(params.courseId)].type ===
                            "text" && <Example></Example>}
                          {courses[parseInt(params.courseId)].type ===
                            "form" && <GoogleForm />}
                        </div>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          {courses[parseInt(params.courseId)].namecourse}
                        </Text>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%] rounded-lg">
                      <div className=" aspect-w-16 aspect-h-9 h-[455px] relative w-[100%] overflow-auto">
                        <CustomFormPage></CustomFormPage>
                      </div>
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
                          className={`hover:cursor-pointer flex flex-1 items-center justify-between hover:my-[0] my-[0] p-[10px] rounded-[10px] hover:shadow-bs w-[100%] ${
                            valueButton === index.toString()
                              ? "choose"
                              : "bg-white"
                          }`}
                          onDragStart={(e) => {
                            dragStart(e, index);
                            myref.current[index].scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }}
                          onDragEnter={(e) => {
                            dragEnter(e, index);
                            myref.current[index].scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }}
                          onDragEnd={drop}
                          draggable
                        >
                          <div
                            className="flex flex-row gap-[10px] items-center justify-start self-stretch w-full "
                            onClick={() => {
                              setValue(index.toString());
                              myref.current[index].scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });

                              navigate(`/testthu/${index}`);
                            }}
                          >
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
                          <div
                            onClick={() => {
                              deteletrue(index);
                            }}
                          >
                            <Img
                              src="/rubbish.svg"
                              className="h-[30px] md:h-[3] object-cover rounded-[5px] w-[30px]"
                              alt="image"
                            />
                          </div>
                        </div>
                      ))}
                      <div
                        ref={(element) => {
                          myref.current[courses.length] = element;
                        }}
                        key={courses.length}
                        onClick={() => {
                          setValue(courses.length.toString());
                          myref.current[courses.length].scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });

                          navigate(`/testthu/${courses.length}`);
                        }}
                        className={`hover:cursor-pointer flex flex-1 items-start justify-center hover:my-[0] my-[0] p-[10px] rounded-[10px] hover:shadow-bs w-[100%] ${
                          valueButton === courses.length.toString()
                            ? "choose"
                            : "bg-white"
                        }`}
                      >
                        <div className="flex flex-col gap-[3px] items-center justify-center self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-center w-[auto]"
                            variant="body3"
                          >
                            Add lesson
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-end self-stretch w-[auto]">
                          <Img
                            src="/add.svg"
                            className="h-[50px] md:h-[auto] object-cover rounded-[5px] w-[80px]"
                            alt="image"
                          />
                        </div>
                      </div>
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
                    Dear our beloved students at FIE English, First and
                    foremost, FIE English would like to express our sincerest
                    gratude to all of our students for believing and choosing
                    TW. This publication, Junior. Students Workbook, you are
                    holding right now is a brilliant combination of carefuly
                    selected intellectual products, created by none other than
                    our team at FIE English. As an embodiment of our mission
                    which is to not only help our students improve their English
                    and develop the language beyond classroom context but also
                    enable them to conquer the IELTS exam, this workbook shall
                    act as a constant companion to allow students to make the
                    most of in-class lessons. Therefore, FIE truly hopes that
                    our students can allocate their time and energy to complete
                    all tasks provided in this workbook so as to achieve the
                    perfect result for each and every course they take at FIE
                    English. Essentially complementary to this workbook is a
                    splendidly crafted CELTA-standard visual syllabus, a product
                    jointly owned by an elite team of teachers at FIE English
                    and critically reviewed under the guidance and supervision
                    of numerous IELTS experts, masters in linguistics, masters
                    in pedagogy and many other holders of bachelor's and
                    master's degree in Education who had studied in England and
                    Australia. We will use our last word to thank you for
                    placing your trust in us, whereby becoming an integral part
                    of our success. We hope that you enjoy your time with us.
                    FIE English Golden Standard for IELTS Preparation
                    <br />
                    import Lesson from './Lesson'; Get Udemy certificate by
                    completing entire course
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
                  Get FIE certificate by completing entire course
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
                  The course will focus on developing the specific language
                  skills required to improve the individual's overall IELTS
                  score. This may include improving vocabulary, grammar, and
                  pronunciation, as well as building reading, writing,
                  listening, and speaking skills. The IELTS 4.0-5.0 course is
                  typically offered by language schools, universities, or
                  private language institutes. It may be taught in-person or
                  online, and can be tailored to the needs of specific groups,
                  such as business professionals or healthcare workers.
                  Individuals who take the IELTS 4.0-5.0 course can expect to
                  improve their English language proficiency and feel more
                  confident in their ability to communicate effectively in
                  English. They will also be better prepared to achieve their
                  goals in academic, professional, or immigration contexts that
                  require a higher level of English language proficiency.
                  Overall, the IELTS 4.0-5.0 course is a valuable investment for
                  non-native English speakers seeking to improve their English
                  language skills and achieve success in their chosen field.
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
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-deep_orange_400 h-[10px] rounded-[50%] w-[10px]"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Speaking: You will practice speaking English in a variety of
                    contexts, including discussions, presentations, and
                    interviews.
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
                  <EditText
                    className="text-deep_orange_400 text-right w-[auto]"
                    as="h6"
                    variant="h6"
                    handleSave={(val) => {
                      setValueInf({ ...value, Price: val });
                    }}
                  >
                    {value.Price}
                  </EditText>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Instructor
                  </Text>
                  <EditText
                    to="/Author"
                    className="font-semibold text-[20px] text-black_900 text-right underline w-[auto]"
                    handleSave={(val) => {
                      setValueInf({ ...value, Instructor: val });
                    }}
                  >
                    {value.Instructor}
                  </EditText>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Ratings
                  </Text>
                  <Img
                    src="./anh2.svg"
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
                  <EditText
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                    handleSave={(val) => {
                      setValueInf({ ...value, Duration: val });
                    }}
                  >
                    {value.Duration}
                  </EditText>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Lessons
                  </Text>
                  <EditText
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                    handleSave={(val) => {
                      setValueInf({ ...value, Lesson: val });
                    }}
                  >
                    {value.Lesson}
                  </EditText>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Quizzes
                  </Text>
                  <EditText
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                    handleSave={(val) => {
                      setValueInf({ ...value, Quizzes: val });
                    }}
                  >
                    {value.Quizzes}
                  </EditText>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Certificate
                  </Text>
                  <EditText
                    className="font-semibold text-black_900 text-right w-[auto]"
                    variant="body2"
                    handleSave={(val) => {
                      setValueInf({ ...value, Certificate: val });
                    }}
                  >
                    {value.Certificate}
                  </EditText>
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

export default TeacherCoursesDetails;
