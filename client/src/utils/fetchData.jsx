import React from "react";
import { makeRequest } from "./../utils/axios";

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
    console.error(error);
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

export { getImage, handleFileUpload, getVideo };
