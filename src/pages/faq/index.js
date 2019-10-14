import React from "react";
import Navbar from "../../components/Navbar";
import SectionHeader from "../../components/SectionHeader";
import logo from "./../../assets/duck.svg";
import "./styles.scss";

function FaqPage(props) {
  return (
    <>
      <Navbar color="#0ca7ff" spaced={true} logo={logo} />
      <br />
      <br />
      <SectionHeader
        title={"Who do I contact for support?"}
        subtitle={"Please email us at: contactfeedbackbill@gmail.com"}
        centered={true}
        size={1}
      />{" "}
    </>
  );
}

export default FaqPage;
