import React from "react";
import { FaLocationPin, FaCalendar, FaRocket } from "react-icons/fa6";

const TopBoxBar = () => {
  const currDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex justify-center items-center font-sans text-xs sm:text-sm font-bold sm:rounded-t-3xl w-full p-4 bg-accent shadow-2xl gap-4 ">
      <div className="sm:flex hidden justify-center items-center gap-1">
        {" "}
        <FaRocket /> Software Engineer
      </div>
      <span className="hidden sm:flex">•</span>
      <div className="flex justify-center items-center gap-1">
        <FaLocationPin /> Waterloo, Canada
      </div>
      •
      <div className="flex justify-center items-center gap-1">
        <FaCalendar /> {currDate}
      </div>{" "}
    </div>
  );
};

export default TopBoxBar;
