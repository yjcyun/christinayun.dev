import React from "react";
import Layout from "../components/layout/layout";
import PageTitle from "../components/page-title";

const About = () => {
  return (
    <Layout>
      <PageTitle title="About" />
      <p>Hi =) </p>
      <br />
      <p>
        I do frontend stuff at work but I'm always curious about the backend and
        other areas of software development. I can be ambitious and bold but
        often I'm not. I am easy-going with others but hardcore with myself. I
        enjoy hiking with my dogs in my free time.
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
