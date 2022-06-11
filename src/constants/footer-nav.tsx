import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const footerNav = [
  // { label: "Home", link: "/" },
  // { label: "Resume", link: "/resume" },
  // { label: "Projects", link: "/projects" },
  // { label: "Posts", link: "/posts" },
  // { label: "Log", link: "/log" },
];

export const socialLinks = [
  { id: "github", label: <FiGithub />, link: "https://github.com/yjcyun" },
  {
    id: "linkedin",
    label: <FiLinkedin />,
    link: "https://www.linkedin.com/in/yjcyun/",
  },
  { id: "email", label: <FiMail />, link: "mailto:christina5707@gmail.com" },
];
