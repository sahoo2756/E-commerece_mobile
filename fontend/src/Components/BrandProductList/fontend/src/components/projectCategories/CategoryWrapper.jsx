import React from "react";
import "./basic.css";
import E_CommereceImg from "../../assets/projectCategories/E-Commerece.img.jpeg";
import FinanceImg from "../../assets/projectCategories/Finance.img.jpeg";
import LibraryMngImg from "../../assets/projectCategories/LibraryMNG.img.jpeg";
import StudentMngImg from "../../assets/projectCategories/StudentMNG.img.jpeg";
import VideoCallingImg from "../../assets/projectCategories/VideoCallingWebApp.img.jpeg";
import VideoStreamingImg from "../../assets/projectCategories/VideoStreaming.img.jpeg";
import WebsiteCloneImg from "../../assets/projectCategories/WebsiteClone.img.jpeg";

function CategoryWrapper() {
  return (
    <div className="mt-20">
      <p className="projectCategoriesCustomCssClass  font-semibold">Project Categories</p>
    <div className="flex flex-wrap justify-between gap-10 px-52  pt-8 pb-10">
      {/* default img css available in ./basic.css file */}
      
      <img className={`categoryImgCustomCss`} src={E_CommereceImg} alt="" />
      <img className={`categoryImgCustomCss`} src={FinanceImg} alt="" />
      <img className={`categoryImgCustomCss`} src={LibraryMngImg} alt="" />
      <img className={`categoryImgCustomCss`} src={StudentMngImg} alt="" />
      <img className={`categoryImgCustomCss`} src={VideoCallingImg} alt="" />
      <img className={`categoryImgCustomCss`} src={VideoStreamingImg} alt="" />
      <img className={`categoryImgCustomCss`} src={WebsiteCloneImg} alt="" />
    </div>
    </div>
  );
}

export default CategoryWrapper;
