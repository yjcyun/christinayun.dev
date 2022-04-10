import React from "react";

import Section from "@components/section-wrapper";

const Contact = () => {
  return (
    <Section
      smallMargin
      title="Contact"
      description={
        <>
          You can find me on{" "}
          <a
            className="link"
            href="https://github.com/yjcyun"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          , and message me on{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/yjcyun/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          , or email me at contact@christinayun.dev.
        </>
      }
    ></Section>
  );
};

export default Contact;
