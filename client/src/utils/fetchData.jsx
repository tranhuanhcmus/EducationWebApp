import React from "react";
import { makeRequest } from "./../utils/axios";
import { json } from "react-router-dom";

// return an image
const getImage = async (name) => {
  try {
    const res = await makeRequest({
      url: "/image",
      method: "post",
      data: {
        name: name,
      },
    });
    const image = `data:image/jpeg;base64, ${res.data}`;
    return image;
  } catch (error) {
    return error.message;
  }
};

// upload selectedImage with fileName
const handleFileUpload = async (selectedImage, fileName) => {
  const formData = new FormData();

  formData.append("image", selectedImage, fileName);

  try {
    const response = await makeRequest({
      method: "post",
      url: "/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleFileUploadVideo = async (selectedVideo, fileName) => {
  const formData = new FormData();

  formData.append("video", selectedVideo, fileName);

  try {
    const response = await makeRequest({
      method: "post",
      url: "/uploadvideo",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleAddLesson = async (data1) => {
  try {
    const response = await makeRequest({
      method: "post",
      url: "/addlesson",
      data: data1,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// return URL video
const getVideo = async (name) => {
  const response = await makeRequest({
    url: `/video/${name}`,
    method: "get",
    responseType: "blob",
  });
  const blob = await response.data;
  return URL.createObjectURL(blob);
};

const getAllCourse = async () => {
  const data_courses = await makeRequest({
    url: "/course",
    method: "get",
  });
  const blob = await data_courses.data;
  return blob;
};

const HandleGetCourseOfTeacher = async (id) => {
  const data_courses = await makeRequest({
    url: `/myclass/${id}`,
    method: "get",
  });
  const blob = await data_courses.data;
  return blob;
};

const HandleSaveCourseOfTeacher = async (data) => {
  try {
    const response = await makeRequest({
      method: "post",
      url: "/addcourse",
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const HandleDeleteCourseOfTeacher = async (id) => {
  try {
    const response = await makeRequest({
      method: "delete",
      url: `/deletecourse/${id}`,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const HandleDeleteLessonOfTeacher = async (id) => {
  try {
    const response = await makeRequest({
      method: "delete",
      url: `deletelesson/${id}`,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
const GetCourseInCart = async (id) => {
  try {
    const response = await makeRequest({
      method: "get",
      url: `/mycart/${id}`,
    });

    const blob = await response.data;
    return blob;
  } catch (error) {
    console.error(error);
  }
};

const AddCourseToCart = async (data) => {
  try {
    const response = await makeRequest({
      method: "post",
      url: "/addtocart",
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const GetMyCourse = async (id) => {
  try {
    const response = await makeRequest({
      method: "get",
      url: `/mycourse/${id}`,
    });

    const blob = await response.data;
    return blob;
  } catch (error) {
    console.error(error);
  }
};
const HandleDeleteItemInCart = async (data) => {
  try {
    const response = await makeRequest({
      method: "delete",
      url: "/deletefromcart",
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
const HandlePayMent = async (data) => {
  try {
    const response = await makeRequest({
      method: "put",
      url: "/enrollcourse",
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const HandleUpdateCourse = async (data) => {
  try {
    const response = await makeRequest({
      method: "put",
      url: "/updatecourse",
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export {
  getImage,
  handleFileUpload,
  handleFileUploadVideo,
  getVideo,
  getAllCourse,
  handleAddLesson,
  HandleGetCourseOfTeacher,
  HandleSaveCourseOfTeacher,
  HandleDeleteCourseOfTeacher,
  HandleDeleteLessonOfTeacher,
  GetCourseInCart,
  AddCourseToCart,
  GetMyCourse,
  HandleDeleteItemInCart,
  HandlePayMent,
  HandleUpdateCourse,
};
