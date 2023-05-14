import React from "react";
import Text from "./Text";
import Img from "./Img";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { getImage, handleFileUploadVideo } from "../utils/fetchData";
import { useParams, useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { handleAddLesson } from "../utils/fetchData";

const CustomFormPage = (props) => {
  const params = useParams();
  const [selectedFile, setSelectedFile] = React.useState();
  const [File, setFile] = React.useState();

  const TitleInputRef = React.useRef();
  const DetailInputRef = React.useRef();
  const DurationInputRef = React.useRef();
  const AttachmentInputRef = React.useRef();
  const [isFilePicked, setIsFilePicked] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok");
    //const fileName = `video${parseInt(params.courseId)}.mp4`;
    const fileName = `${(+new Date()).toString(36)}.png`;
    const LID = `${(+new Date()).toString(36)}`;
    await handleFileUploadVideo(File, fileName);
    console.log(TitleInputRef.current.value);
    console.log(DetailInputRef.current.value);
    console.log(DurationInputRef.current.value);
    console.log(AttachmentInputRef.current.value);

    // const jsTime = new Date(); // Replace with your JavaScript date object
    // const sqlTime = jsTime.toLocaleTimeString("en-US", { hour12: false });

    const data = {
      LessonID: LID,
      CourseID: params.courseId.toString(),
      Name: TitleInputRef.current.value,
      Content: DetailInputRef.current.value,
      Video: fileName,
      Attachment: AttachmentInputRef.current.value,
      Duration: DurationInputRef.current.value,
    };
    props.handleAdd(
      data.LID,
      data.CourseID,
      data.Name,
      data.Content,
      data.Video,
      data.Attachment,
      data.Duration
    );

    // var data = {};
    // data.LessonID = "444";
    // data.CourseID = "113";
    // data.Name = "Lesson tesst thu";
    // data.Content = "No content";
    // data.Video = fileName;
    // data.Attachment = "NO";
    // data.Duration = "00:30:00";
    await handleAddLesson(data);
    window.location.reload();
  };

  const changeHandler = (event) => {
    const file = event.target.files[0];
    setFile(file);
    const url = URL.createObjectURL(file);
    setSelectedFile(url);
    setIsFilePicked(true);
  };

  return (
    <>
      <div className="bg-gray_54 flex flex-col font-gilroy items-center justify-start mx-auto w-full overflow-auto ">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="p-8 flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0 mt-[59px] w-full">
              <Text className="font-semibold md:text-3xl sm:text-[28px] text-[32px] text-bluegray_900 text-left w-auto">
                Add your Lesson
              </Text>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              ref={TitleInputRef}
                              type="text"
                              name="username"
                              id="username"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="input title of your lesson"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          About lesson
                        </label>
                        <div className="mt-2">
                          <textarea
                            ref={DetailInputRef}
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Write a few description about lesson.
                        </p>
                      </div>

                      <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="Duration"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Duration
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  ref={DurationInputRef}
                                  type="time"
                                  name="Duration"
                                  id="Duration"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="input time of lesson"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 space-y-10">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="ATTACHMENT"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              ATTACHMENT
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  ref={AttachmentInputRef}
                                  type="link"
                                  name="ATTACHMENT"
                                  id="ATTACHMENT"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="input attachment"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="cover-photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Upload your file
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <PaperClipIcon
                              className="mx-auto h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={changeHandler}
                                />
                              </label>
                              {isFilePicked ? (
                                <div>
                                  <ReactPlayer
                                    url={selectedFile}
                                    className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                                    height="300px"
                                    width="400px"
                                    controls
                                  ></ReactPlayer>
                                  <p>Filename: {selectedFile}</p>
                                </div>
                              ) : (
                                <div>
                                  <p className="text-xs leading-5 text-gray-600">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFormPage;
