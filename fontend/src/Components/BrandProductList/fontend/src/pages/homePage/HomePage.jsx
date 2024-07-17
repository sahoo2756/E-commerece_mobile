import React from "react";
import NavbarWrapper from "../../components/navbar/NavbarWrapper.jsx";
import ProjectSearchBox from "../../components/projectSearch/ProjectSearchBox.jsx";
import CategoryWrapper from "../../components/projectCategories/CategoryWrapper.jsx";
import ContactWithMeWrapper from "../../components/contactWithMeFeature/ContactWithMeWrapper.jsx";

function HomePage() {
  return (
    <div className="w-full min-h-screen h-full bg-[#15112D] text-white">
      <ProjectSearchBox />
      <CategoryWrapper />
      <ContactWithMeWrapper />
      <br /><br /><br />
    </div>
  );
}

export default HomePage;
