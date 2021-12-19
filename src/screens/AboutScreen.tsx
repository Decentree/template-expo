import React from "react";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import About from "../components/templates/About";

const AboutScreen: React.FC = () => {
  return (
    <LayoutSafeArea>
      <About />
    </LayoutSafeArea>
  );
};

export default AboutScreen;
