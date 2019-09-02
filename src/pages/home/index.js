import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

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
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default HomePage;
