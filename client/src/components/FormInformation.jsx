import React from "react";

import Button from "./Button";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdropTeacher" onClick={props.HandleFalse} />;
};

const ModalOverlay = (props) => {
  const TitleInputRef = React.useRef();

  const DetailInputRef = React.useRef();
  const PriceInputRef = React.useRef();
  const BandInputRef = React.useRef();
  const [selectedFile, setSelectedFile] = React.useState({
    prevFile: "",
    fileName: "",
  });
  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddCourse(
      TitleInputRef.current.value,
      PriceInputRef.current.value,
      selectedFile,
      DetailInputRef.current.value,
      BandInputRef.current.value
    );
    TitleInputRef.current.value = "";
    DetailInputRef.current.value = "";
    PriceInputRef.current.value = "";
    props.HandleFalse();
  };

  const changeHandler = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSelectedFile({
      prevFile: file,
      fileName: url,
    });
  };

  return (
    <div className="bg-white modalTeacher rounded-[15px] hover:shadow-bs1">
      <form onSubmit={addUserHandler}>
        <header className="bg-red_300 text-white p-5">
          <h2>Add Course</h2>
        </header>

        <div className="contentTeacher">
          <label
            htmlFor="Tilte"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Title
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="Title"
                id="Title"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                ref={TitleInputRef}
                required
              />
            </div>
          </div>
          <label
            htmlFor="Price"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Price
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="Price"
                id="Price"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                ref={PriceInputRef}
                required
              />
            </div>
          </div>
          <label
            htmlFor="Image"
            className="block text-sm font-medium leading-6 text-gray-90 mt-2"
          >
            Image
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="file"
                name="Image"
                id="Image"
                onChange={changeHandler}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <label
            htmlFor="Details"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Details
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="Details"
                id="Details"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                ref={DetailInputRef}
                required
              />
            </div>
          </div>
          <label
            htmlFor="Choice band of ielts"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Select band of IELTS
          </label>
          <select
            id="countries"
            ref={BandInputRef}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option selected>Choose band of IELTS</option>
            <option value="BAND 5.0">BAND 5.0</option>
            <option value="BAND 6.0">BAND 6.0</option>
            <option value="BAND 7.0">BAND 7.0</option>
            <option value="BAND 8.0">BAND 8.0</option>
          </select>
        </div>
        <footer className="actionsTeacher">
          <Button
            className=" border-[1px] border-red_300 border-solid cursor-pointer font-inter font-medium min-w-[161px] sm:px-[20px] px-[12px] py-[12px] rounded-[5px] text-[16px] text-center text-red_300 w-[auto]"
            type="submit"
          >
            Add
          </Button>
        </footer>
      </form>
    </div>
  );
};

const AddModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop HandleFalse={props.HandleFalse} />,
        document.getElementById("root_1")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          HandleFalse={props.HandleFalse}
          onAddCourse={props.onAddCourse}
        />,
        document.getElementById("root_2")
      )}
    </React.Fragment>
  );
};

export default AddModal;
