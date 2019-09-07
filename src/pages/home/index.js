import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import logo from "./../../assets/duck.svg";
import "./styles.scss";

function HomePage(props) {
  return (
    <>
      <Navbar color="#0ca7ff" spaced={true} logo={logo} />
      <HeroSection
        color="#0ca7ff"
        size="medium"
        title="Feedback Bill"
        subtitle="Get feedback from your friends and peers from within Slack!"
      />
    </>
  );
}

export default HomePage;
