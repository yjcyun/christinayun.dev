import React from "react";
import Layout from "../components/layout/layout";
import PageTitle from "../components/page-title";

const About = () => {
  return (
    <Layout>
      <PageTitle title="About" />
      <p>Hi</p>
      <br />
      <p>
        I have a background in biology but I do frontend stuff now. I enjoy
        hiking with my dogs in my free time.
      </p>
      <br />
      <p>
        I'm currently not available for any freelance work but thank you for
        asking. Hope you all have a great day =)
      </p>
    </Layout>
  );
};

export default About;
