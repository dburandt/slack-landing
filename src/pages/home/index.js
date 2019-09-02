import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import "./styles.scss";

function HomePage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="white"
        size="medium"
        title="Feedback Bill"
        subtitle="Get feedback from your friends and peers from within Slack."
      />
    </>
  );
}

export default HomePage;
