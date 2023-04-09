import React, { useState }  from "react";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Calendar from "react-calendar";
import DemoForm from "@components/Form/DemoForm";

const Demo = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div className="lg:flex justify-between w-[95%] sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[65%] mx-auto py-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl ">
          Book a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">
            DEMO
          </span>{" "}
          to understand <br /> what A1ITFirm is all about.
        </p>
        <Image
          className="pt-10 md:hidden"
          height={433}
          width={433}
          src="/demo-banner.svg"
          alt="Calendar Banner"
        />
      </div>
      <div className="my-calendar flex flex-col items-center mt-10 lg:mt-0">
        <DemoForm/>
      </div>
    </div>
  );
};

export default Demo;
