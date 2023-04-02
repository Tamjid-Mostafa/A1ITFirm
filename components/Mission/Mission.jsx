import Container from '@components/ui/Container'
import Image from 'next/image'
import React from 'react'
import cn from "clsx";
import s from "./Mission.module.css";

const Mission = () => {
  return (
    <div  className={cn(s.root)}>
    <Container className="mx-auto justify-center items-center py-20">
      <div className="text-center">
        <p className=" text-4xl font-ClashDisplay-Semibold">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">Vision</span>
        </p>
      </div>
      <div className="lg:flex min-h-[50vh] justify-center items-center">
        <div className="text-lg lg:w-[65%] lg:mt-0 mt-5">
          <p className="lg:text-left text-center w-[90%]">
          Our lead generation agency&apos;s mission is to help businesses of all sizes and industries unlock their full potential by generating high-quality leads that are tailored to their specific business goals. We&apos;re passionate about marketing and dedicated to using the latest technology and proven tactics to help our clients succeed. Our goal is to provide personalized service, ongoing support, and optimization to ensure our clients are getting the most out of their investment. We strive to be a trusted partner for businesses looking to grow and to make a positive impact on the industries we serve.
          </p>
        </div>
        
        <div className="flex flex-col items-center lg:w-[45%]">
          <Image height={680} width={780} src="/mission.svg" alt="Vision" />
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Mission