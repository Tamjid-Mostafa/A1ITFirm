import React from "react";
import cn from "clsx";
import s from "./AboutUs.module.css";
import Image from "next/image";
import Button from "@components/ui/Button/Button";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className={cn(s.container)}>
      <div className=" w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto justify-center items-center min-h-[80vh]">
        <div className="text-center min-h-[10vh]">
          <p className="lg:pt-20 pt-5 text-4xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">us</span>
          </p>
        </div>
        <div className="lg:flex min-h-[50vh] justify-center items-center">
          <div className="flex flex-col items-center lg:w-[35%]">
            <Image height={151} width={175} src="/logo.png" alt="Logo" />
            <p className=" text-4xl mt-5">A1ITFirm</p>
          </div>
          <div className="text-xl lg:w-[65%] lg:mt-0 mt-5">
            <p className="lg:text-left text-center">
              Our lead generation agency is a team of passionate marketers who are dedicated to helping businesses succeed. With years of experience and a proven track record of success, we use the latest technology and proven tactics to generate high-quality leads that are tailored to your specific business goals. We pride ourselves on providing personalized service, ongoing support, and optimization to ensure you&apos;re getting the most out of your investment. Our mission is simple: to help your business reach its full potential through effective lead generation strategies. Choose us and let us help you achieve your business dreams!
            </p>
          </div>
        </div>
        {
          router.pathname !== '/about' && <div className="text-center pb-5 mt-5">
            <Button variant="gradient" className="hover:text-white">View More</Button>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutUs;
