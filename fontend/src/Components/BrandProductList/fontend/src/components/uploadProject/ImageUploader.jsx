import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { manageFiles } from "./utility/ManageFiles_img_video_audio.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleAddImage = (event, imageFiles, setImageFiles) => {
  // imageFiles should not be more than 7.
  if (imageFiles.length >= 7) {
    toast.error("Maximum 7 image files can be uploaded", { theme: "colored" });
    return;
  }

  let res = manageFiles.addFile({
    newFile: event.target.files[0],
    filetype: "img",
    maxFileSize: 2,
    existingState: imageFiles,
    setterFunc: setImageFiles,
  });

  event.target.value = "";


  if (!res.isSuccess) {
    toast.error(res.message, { theme: "colored" });
  }
};


const handleRemoveImage = (indexToRemove, imageFiles, setImageFiles) => {
  const res = manageFiles.removeFile({
    indexToRemove,
    existingState: imageFiles,
    setterFunc: setImageFiles,
  });

  if (!res.isSuccess) {
    toast.error(res.message, { theme: "colored" });
  }

};


// function to be export
function ImageUploader ({ prop }) {
  const { imageFiles, setImageFiles } = prop;

  
  return (
    <div className="bg-purple-800 p-5 pt-3 rounded-2xl shadow-2xl text-center">
      <p className="font-bold text-white mb-5 text-lg">Upload Image Here </p>
      <label htmlFor="uploadImage">
        <input
          type="file"
          accept="image/png , image/jpg , image/jpeg"
          multiple
          id="uploadImage"
          hidden
          onChange={(e) => handleAddImage(e, imageFiles, setImageFiles)}
        />

        
        {/* upload image container */}
        <div className="imageUploaderCustomCss bg-white/90 py-3 mb-4 rounded-2xl gap-y-3">
          <IoMdCloudUpload className="text-7xl text-blue-800 bg-transparent" />
          <p className="font-bold text-gray-600">
            Drag and Drop or <span>Click here</span> <br /> to upload image
          </p>
          <p className="text-sm text-blue-800">
            Image size must less that 5 MB
          </p>
          <p className="text-xs text-blue-800">
            Maximum 7 images Can be Uploaded
          </p>
        </div>
      </label>

      <div className="grid gap-y-3">
        {imageFiles.map((file, index) => {
          let filePath = URL.createObjectURL(file);
          return (
            <div
              key={index}
              className="bg-white text-start rounded-lg p-2 flex justify-between items-center"
            >
              <span className="text-blue-600">{file.name}</span>
              <div className="flex items-center gap-x-4">
                <a
                  className="text-blue-600"
                  href={filePath}
                  download={file.name}
                >
                  download
                </a>
                <button
                  className="text-lg text-red-600 font-bold"
                  onClick={(e) =>
                    handleRemoveImage(index, imageFiles, setImageFiles)
                  }
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer className="w-[40%]" autoClose={false} />
    </div>
  );
}

export default ImageUploader;
