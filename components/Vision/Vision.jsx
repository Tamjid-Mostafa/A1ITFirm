import Button from '@components/ui/Button'
import Image from 'next/image'
import React from 'react'
import cn from "clsx";
import s from "./Vision.module.css";
import Container from '@components/ui/Container';

const Vision = () => {
  return (
    <div  className={cn(s.root)}>
      <Container className="mx-auto justify-center items-center py-20">
        <div className="text-center">
          <p className=" text-4xl font-ClashDisplay-Semibold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">Vision</span>
          </p>
        </div>
        <div className="lg:flex min-h-[50vh] justify-center items-center">
          <div className="flex flex-col items-center lg:w-[45%]">
            <Image height={680} width={780} src="/vision.svg" alt="Vision" />
          </div>
          <div className="text-lg lg:w-[65%] lg:mt-0 mt-5">
            <p className="lg:text-left text-center">
            At our lead generation agency, our vision is to become a trusted partner for businesses of all sizes and industries looking to unlock their full potential. We believe that every business has the potential to succeed, and we&apos;re dedicated to helping them get there through effective lead generation strategies. Our goal is to provide personalized service, innovative solutions, and ongoing support to help our clients achieve their business goals. We strive to be a leader in the industry and to make a positive impact on the businesses we serve.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Vision