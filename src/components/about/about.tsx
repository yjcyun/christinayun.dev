import React from "react";

import { Section } from "@styles/shared-style";
import PageTitle from "@components/page-title";

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
    <Section>
      <PageTitle title="About" description={renderDescription} />
    </Section>
  );
};

export default About;
