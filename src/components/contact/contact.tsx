import React from "react";

import { Section } from "@styles/shared-style";
import PageTitle from "@components/page-title";

const Contact = () => {
  return (
    <Section smallMargin>
      <PageTitle
        title="Contact"
        description={
          <>
            You can reach out to me on{" "}
            <a
              className="accent"
              href="https://github.com/yjcyun"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            and{" "}
            <a
              className="accent"
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
      />
    </Section>
  );
};

export default Contact;
