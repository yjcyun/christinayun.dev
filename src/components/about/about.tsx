import PageTitle from "@components/page-title";
import React from "react";

const About = () => {
  const renderDescription = (
    <>
      My name is Christina Yun, and I am a Frontend Developer in Toronto🍁. I
      have a BSc in Biological Science and a Diploma in Veterinary Technology. I
      spend most of day studying JavaScript, playing with React, learning new
      tools, and drinking tea☕.
    </>
  );

  return (
    <div>
      <PageTitle title="About" description={renderDescription} />
    </div>
  );
};

export default About;
