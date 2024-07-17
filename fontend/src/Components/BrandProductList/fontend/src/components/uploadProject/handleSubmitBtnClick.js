import { AsyncHandler } from "../../Utility/AsyncHandler";
import { ClientError } from "../../Utility/ClientError";
import { useCurrentUserDetails } from "../../context/currentUserDetails.context.js";
import axios from "axios";
import { BASE_URL } from "../../Utility/Constant.utility.js";


const handleSubmitBtnClick = AsyncHandler(
  async ({
    projectName,
    websiteURL = "",
    techStack_SelectedOption,
    projectCategory_SelectedOption,
    imageFiles,
    videoFiles,
  }) => {

    // validate parameters
    // make a formdata
    // send formData to server

    if (!projectName) {
      throw new ClientError(
        "ProjectName filed is a falsy value = ",
        projectName
      );
    }
    if (!techStack_SelectedOption) {
      throw new ClientError(
        "techStack_SelectedOption filed is a falsy value = ",
        techStack_SelectedOption
      );
    }
    if (!projectCategory_SelectedOption) {
      throw new ClientError(
        "projectCategory_SelectedOption is a falsy value = ",
        projectCategory_SelectedOption
      );
    }

    if (imageFiles.length <= 0) {
      throw new ClientError("Image File is empty");
    }
    if (videoFiles.length <= 0) {
      throw new ClientError("Video file is empty");
    }
    
    const { email , password } = useCurrentUserDetails()
    let formData = new FormData();

    formData.append("email" , email);
    formData.append('password', password);
    formData.append("projectName" , projectName);
    formData.append("websiteURL" , websiteURL);
    formData.append("techStack" , techStack_SelectedOption);
    formData.append("projectCategory", projectCategory_SelectedOption);


    imageFiles.forEach(file => formData.append("projectImage", file));
    videoFiles.forEach(file => formData.append("projectVideo", file));
   
   let response = await axios.post(`${BASE_URL}/api/userProjects/uploadProject` , formData);
   console.log("handleSubmitUploadForm Btn clicked = " , response);

   return;
 
  }
);


export { handleSubmitBtnClick };
