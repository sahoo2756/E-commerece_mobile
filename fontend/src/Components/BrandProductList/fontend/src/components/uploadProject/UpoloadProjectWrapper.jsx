import React, { useRef, useState } from "react";
import "./basic.css";
import { techStack_Options, projectCategory_Options } from "./ProjectInfoMenuList.js";
import Select from "react-select";
import ImageUploader from "./miniComponent/Imageuploader.miniComp.jsx";
import VideoUploader from "./miniComponent/VideoUploader.miniComp.jsx";
import { handleSubmitBtnClick } from "./handleSubmitBtnClick.js";

// function to be expport
const UploadProjectWrapper = () => {

  const [techStack_SelectedOption, setTechStack_SelectedOption] = useState(null);
  const [projectCategory_SelectedOption, setProjectCategory_SelectedOption] = useState(null);
  const [projectName, setProjectName] = useState("");
  const websiteURL_InputFiled_Ref = useRef();
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);

  const states = {
    techStack_SelectedOption , 
    projectCategory_SelectedOption,
    projectName,
    imageFiles,
    videoFiles
  }

  // projectUploadContext

  return (
    <>
      <div className=" w-2/6 px-5 py-5 rounded-lg  bg-white  m-auto mt-10 flex flex-col gap-6">
        <p className=" text-center font-semibold text-lg">
          Upload Project On CodeBazaar
        </p>
        <input
          type="text"
          className="text-black w-[100%] bg-transparent px-4 py-2 text-lg outline-none  border-2 border-gray-500 "
          placeholder="* Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <input
          type="text"
          className="text-black w-[100%] bg-transparent px-4 py-2 text-lg outline-none  border-2 border-gray-500 "
          placeholder="Live Webiste URL  (Optional)"
          ref={websiteURL_InputFiled_Ref}
          required
        />

        <Select
          defaultValue={techStack_SelectedOption}
          onChange={setTechStack_SelectedOption}
          options={techStack_Options}
          placeholder="Select Tech Stack"
          className="w-[50%] border border-gray-700"
        />
        <Select
          defaultValue={projectCategory_SelectedOption}
          onChange={setProjectCategory_SelectedOption}
          options={projectCategory_Options}
          className="w-[50%] border border-gray-700"
          placeholder="Select Project Category"
        />

        {projectCategory_SelectedOption?.value === "Not Available" && (
          <input
            type="text"
            className="border w-[50%] px-2 py-2 border-black"
            required
            placeholder="Enter Custom Project Category Name"
          />
        )}

        {/* image upload UI */}
        <ImageUploader prop={{ imageFiles, setImageFiles }} />

        {/* Video upload UI */}
        <VideoUploader prop={ { videoFiles, setVideoFiles } } />

        <button
          className="uploadProjectSubmitBtnCustomCss bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 px-20 py-2"
          onClick={(e) => handleSubmitBtnClick({...states , websiteURL : websiteURL_InputFiled_Ref?.current?.value})}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default UploadProjectWrapper;
