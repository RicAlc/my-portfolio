import React from "react";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Introduction from "../components/Introduction";
import LatestWork from "../components/LatestWork";

export function Main() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <LatestWork />
      <ContactMe />
    </>
  );
}
