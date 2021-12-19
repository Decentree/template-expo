import React from "react";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Home from "../components/templates/Home";

const HomeScreen: React.FC = () => {
  return (
    <LayoutSafeArea>
      <Home />
    </LayoutSafeArea>
  );
};

export default HomeScreen;
