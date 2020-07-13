import React from "react";
import Header from "Components/Header/Header";
import Content from "Components/Content/Content";
import MainFrame from "Components/MainFrame/MainFrame";

export default () => (
  <>
    <Header />
    <MainFrame>
      <Content />
    </MainFrame>
  </>
);
