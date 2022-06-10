import React from "react";
import Layout from "@components/layout/layout";
import AboutBanner from "@components/page/about/banner";
import styled from "styled-components";
import Section from "@components/page/about/section";

const StyledAbout = styled.section`
  max-width: var(--md-width);
  margin: 5rem auto;
`;

const About = () => {
  return (
    <Layout>
      <AboutBanner />
      <StyledAbout>
        <Section
          title="Who am I?"
          paragraphs={[
            "My name is Christina Yun, and I am a frontend developer based in Toronto. In my free time, I continue my studies in JavaScript, learn backend and AWS. My goal is to write useful apps and continue making beautiful websites while expanding my knowledge in software engineering.",
          ]}
        />
        <Section
          title="What am I passionate about?"
          paragraphs={[
            "I am amazed by how fast frontend technologies have evolved in the past year. I have witnessed an outpouring of new updates, tutorials, and articles on the internet. In keeping up with the latest industry standards, I have found that being a frontend developer is a never-ending learning journey. It feels incredibly good to learn something new each day.",
            " I am passionate about bridging the gap between the design & engineering when creating world-class products that have lasting impact. I also enjoy being surrounded by people who are just as eager to learn from me, as I am from them.",
          ]}
        />
        <Section
          title="What's in my toolbox?"
          list={[
            "JavaScript,Typescript",
            "React, Gatsby",
            "CSS, SCSS, Styled-Components",
            "Framer motion",
            "Node, Express, NestJS",
            "HTML",
            "SQL",
            "GraphQL",
            "Jest, React Testing Library",
            "Git",
            "Storybook",
            "Hasura",
            "Headless CMS (Wordpress, Stripe)",
          ]}
        />
        <Section
          title="Anything else?"
          paragraphs={[
            "When I'm not programming, you'll find me walking my dogs or hiking in the woods. On weekends, you can catch me at a Vietnamese restaurant enjoying Bánh mì and Bún bò huế.",
          ]}
        />
      </StyledAbout>
    </Layout>
  );
};

export default About;
