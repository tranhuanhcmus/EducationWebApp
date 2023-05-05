import React from "react";

import Text from "../components/Text";
import { useNavigate } from "react-router-dom";
import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import SelectBox from "../components/SelectBox";
import CourseCard from "../components/CourseCard";
import PaginationCard from "../components/PaginationCard";
import CloseSVG from "../components/CloseSVG";
import AddModal from "../components/FormInformation";
import TrashPage from "../components/Trash";
import { useSelector } from "react-redux";
import {
  HandleSaveCourseOfTeacher,
  getImage,
  handleFileUpload,
  HandleDeleteCourseOfTeacher,
  getAllCourse,
} from "../utils/fetchData";

import ClassCard from "../components/ClassCard";
import { HandleGetCourseOfTeacher } from "../utils/fetchData";
import CustomImg from "../components/CustomImg";
import { useCallback } from "react";

const TeacherCoursesPage = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const [Coures, setItems] = React.useState([]);

  const [inputvalue, setInputvalue] = React.useState("");
  const [CourseList, setCourseList] = React.useState([]);

  const [add, setadd] = React.useState();

  const navigate = useNavigate();

  const [valueButton, setValue] = React.useState("");
  const [valuePage, setValuePage] = React.useState(0);
  const [itemsInCart, setItemsInCart] = React.useState([]);

  const CourseHandle = (e) => {
    if (e.target.value !== valueButton) {
      setValue(e.target.value);
    }
  };
  const [bending, setBending] = React.useState(false);

  const fetchData = useCallback(async () => {
    setBending(true);
    const items = JSON.parse(localStorage.getItem("items"));

    const data = await HandleGetCourseOfTeacher(currentUser.ID);
    const dataAllCourse = await getAllCourse();
    const array = [];

    dataAllCourse.map((index) => {
      var i = 0;
      items.map((course) => {
        if (course.CID === index.CID) {
          i = i + 1;
        }
      });
      if (i === 0) {
        array.push(index);
      }
    });
    const dataresponse = await data.map((value) => {
      return {
        Teacher: true,
        ...value,
      };
    });
    setItems(array);
    setCourseList(dataresponse);

    console.log(dataresponse);

    setBending(false);
  }, []);

  React.useEffect(() => {
    const indetifier = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(indetifier);
    };
  }, [fetchData]);
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItemsInCart(items);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const addHandler = () => {
    setadd(true);
  };
  const addHandleFalse = () => {
    setadd(false);
  };

  const addCourseHandler = async (title, price, img, detail, band) => {
    console.log(title, price, img, detail, band);
    const fileName = `${(+new Date()).toString(36)}.png`;
    const ID = `${(+new Date()).toString(36)}`;
    const data = {
      CourseID: ID,
      Name: title,
      Category: band,
      Description: detail,
      Price: price,
      Img: fileName,
      OwnerID: currentUser.ID,
    };
    await HandleSaveCourseOfTeacher(data);
    await handleFileUpload(img.prevFile, fileName);

    setCourseList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          NAME: title,
          IMG: fileName,
          DESCRIPTION: detail,
          CID: ID,
          Teacher: true,
        },
      ];
    });
  };
  const [detele, setdelete] = React.useState({
    condition: false,
    index: 0,
    removeIn: "",
  });
  const addCourseInCartHandler = (title, img, price, id) => {
    setItemsInCart((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          Name: title,
          IMG: img,
          PRICE: price,
          CID: id,
        },
      ];
    });
    alert("Add success!");
    setItems((courses) => courses.filter((course) => course.CID !== id));
  };

  const deteletrue = (i, CID) => {
    setdelete({
      condition: true,
      index: i,
      removeIn: CID,
    });
    console.log(CID);
  };
  const deletefalse = () => {
    setdelete(false);
  };

  const handleRemove = async () => {
    setCourseList((courses) =>
      courses.filter((course) => courses.indexOf(course) !== detele.index)
    );
    await HandleDeleteCourseOfTeacher(detele.removeIn);
    deletefalse();
  };

  return (
    <>
      {add && (
        <AddModal HandleFalse={addHandleFalse} onAddCourse={addCourseHandler} />
      )}
      {detele.condition && (
        <TrashPage HandleFalse={deletefalse} onDeleteCourse={handleRemove} />
      )}
      <div className="bg-gray_100 flex flex-col font-inter gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <CustomImg></CustomImg>
        </div>
        <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
          <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div className="flex flex-row flex-wrap gap-[20px] items-center justify-center max-w-[1280px] mx-[auto] w-[100%]">
              <Button
                value="All Courses"
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "All Courses" === valueButton ? "choose" : ""
                }`}
                onClick={CourseHandle}
              >
                All Courses
              </Button>
              <Button
                value="0.0-2.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "0.0-2.0" === valueButton ? "choose" : ""
                }`}
              >
                0.0-2.0
              </Button>
              <Button
                value="2.0-3.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "2.0-3.0" === valueButton ? "choose" : ""
                }`}
              >
                2.0-3.0
              </Button>
              <Button
                value="3.0-4.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "3.0-4.0" === valueButton ? "choose" : ""
                }`}
              >
                3.0-4.0
              </Button>
              <Button
                value="4.0-5.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "4.0-5.0" === valueButton ? "choose" : ""
                }`}
              >
                4.0-5.0
              </Button>
              <Button
                value="5.0-6.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "5.0-6.0" === valueButton ? "choose" : ""
                }`}
              >
                5.0-6.0
              </Button>
              <Button
                value="6.0-7.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "6.0-7.0" === valueButton ? "choose" : ""
                }`}
              >
                6.0-7.0
              </Button>
              <Button
                value="More Courses"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "More Courses" === valueButton ? "choose" : ""
                }`}
              >
                More Courses
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start max-w-[1280px] mx-[auto] w-[100%]">
              <Text
                className="font-semibold text-gray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                My Course
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className=" bg-white_A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Button
                      className="border-[1px] border-red_300 border-solid cursor-pointer font-inter font-medium min-w-[161px] sm:px-[20px] px-[31px] py-[12px] rounded-[5px] text-[16px] text-center text-red_300 w-[auto]"
                      onClick={addHandler}
                    >
                      Add course
                    </Button>
                  </div>
                  {CourseList.map((props, index) => (
                    <React.Fragment key={`ClassCard${index}`}>
                      <ClassCard
                        className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start px-[15px] pb-[30px] pt-[10px] rounded-[15px] hover:shadow-bs1 hover:w-[100%] w-[100%]"
                        onDeleteCourse={() => deteletrue(index, props.CID)}
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1280px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Other Courses IELTS
                </Text>
                <div className="flex md:flex-col flex-row gap-[42px] items-start justify-start w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-white_A700 flex flex-1 max-w-[838px] pl-[20px] pr-[7px] py-[7px] rounded-[10px] w-[100%]"
                    className="font-medium gap-[222px] leading-[normal] p-[0] placeholder:text-gray_700_99 text-[16px] text-gray_700_99 text-left w-[100%]"
                    name="search"
                    placeholder="Search Class, Course, Book Name"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          fillColor="#995d5a6f"
                          height={24}
                          width={24}
                          viewBox="0 0 24 24"
                        />
                      ) : (
                        <Img
                          src="../../public/find.png"
                          className="cursor-pointer ml-[35px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <SelectBox
                    className="bg-white_A700 flex-1 md:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-[16px] text-gray_700_99 text-left md:w-[100%] w-[32%]"
                    placeholderClassName="text-gray_700_99"
                    name="sortby"
                    placeholder="Sort by: Latest"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="../../public/down-arrow.png"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  {Coures.map((props, index) => {
                    if (6 * valuePage <= index && index < 6 * (valuePage + 1)) {
                      return (
                        <React.Fragment key={`CourseCard${index}`}>
                          <CourseCard
                            className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-row items-end justify-between p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-[100%] w-[100%]"
                            addCourseHandler={addCourseInCartHandler}
                            {...props}
                          />
                        </React.Fragment>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <PaginationCard
              className="flex flex-row items-center justify-center w-[100%]"
              page="Page"
              one={valuePage}
              ofCounter={Math.ceil(Coures.length / 6 - 1)}
              handlenext={() => {
                if (valuePage < Coures.length / 6 - 1)
                  setValuePage(valuePage + 1);
              }}
              handleprev={() => {
                if (valuePage > 0) {
                  setValuePage(valuePage - 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherCoursesPage;
