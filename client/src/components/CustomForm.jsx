import React from "react";
import Text from "./Text";
import { PaperClipIcon } from "@heroicons/react/24/solid";

const CustomFormPage = () => {
  const [selectedFile, setSelectedFile] = React.useState();
  const [isFilePicked, setIsFilePicked] = React.useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
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
              <form className="w-full">
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
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                              Choice type of course
                            </legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              These are some type of file you can upload to
                              website.
                            </p>
                            <div className="mt-6 space-y-6">
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-video"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-video"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Video
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-PDF"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-PDF"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  PDF
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-content"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-content"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Content
                                </label>
                              </div>
                            </div>
                          </fieldset>
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
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            {isFilePicked ? (
                              <div>
                                <p>Filename: {selectedFile.name}</p>
                                <p>Filetype: {selectedFile.type}</p>
                                <p>Size in bytes: {selectedFile.size}</p>
                                <p>
                                  lastModifiedDate:{" "}
                                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
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
