import React from "react";

import Section from "@components/section-wrapper";

const Contact = () => {
  return (
    <Section
      smallMargin
      title="Contact"
      description={
        <>
          You can reach out to me on{" "}
          <a
            className="link"
            href="https://github.com/yjcyun"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/yjcyun/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          , as well as on my mail address at{" "}
          <code>contact@christinayun.dev</code>
        </>
      }
    ></Section>
  );
};

export default Contact;
