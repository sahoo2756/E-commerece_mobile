import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { manageFiles } from "./utility/ManageFiles_img_video_audio.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleAddVideo = (event, videoFiles, setVideoFiles) => {
  if (videoFiles.length >= 2) {
    toast.error("Maximum 2 video file can be uploaded ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,

      theme: "colored",
    });
  }
  let res = manageFiles.addFile({
    newFile: event.target.files[0],
    filetype: "video",
    maxFileSize: 10,
    existingState: videoFiles,
    setterFunc: setVideoFiles,
  });

  event.target.value = ""

  if (res.isSuccess) {
    // console.log(res.message);
  } else {
    toast.error(res.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
};

const handleRemoveVideo = (indexToRemove, videoFiles, setVideoFiles) => {
  const res = manageFiles.removeFile({
    indexToRemove,
    existingState: videoFiles,
    setterFunc: setVideoFiles,
  });

  if (res.isSuccess) {
    console.log(res.message);
  } else {
    console.log(res.message);
  }
};

// function to be export
function VideoUploader( { prop } ) {
  const { videoFiles, setVideoFiles } = prop;
  console.log(videoFiles);

  return (
    <div className="bg-purple-800 p-5 pt-3 rounded-2xl shadow-2xl text-center">
      <p className="font-bold text-white mb-5 text-lg">Upload Video Here </p>
      <label htmlFor="uploadVideo">
        <input
          type="file"
          accept="video/*"
          multiple
          id="uploadVideo"
          hidden
          onChange={(e) => handleAddVideo(e, videoFiles, setVideoFiles)}
        />

        {/* upload Video container */}
        <div className="imageUploaderCustomCss bg-white/90 py-3 mb-4 rounded-2xl gap-y-3">
          <IoMdCloudUpload className="text-7xl text-blue-800 bg-transparent" />
          <p className="font-bold text-gray-600">
            Drag and Drop or <span>Click here</span> <br /> to upload Video
          </p>
          <p className="text-sm text-blue-800">
            Video size must less that 20 MB
          </p>
          <p className="text-xs text-blue-800">
            Maximum 2 video Can be Uploaded
          </p>
        </div>
      </label>

      <div className="grid gap-y-3">
        {videoFiles.map((file, index) => {
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
                    handleRemoveVideo(index, videoFiles, setVideoFiles)
                  }
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default VideoUploader;
