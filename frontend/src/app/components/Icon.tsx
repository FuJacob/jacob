import {
  FaLinkedinIn,
  FaGithubSquare,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Icon = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a
      className="flex justify-center items-center bg-accent dark:bg-dark text-background dark:text-foreground font-bold w-10 h-10 text-xl font-sans rounded-lg hover:bg-hubspot hover:scale-110 hover:duration-300"
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Icon;
