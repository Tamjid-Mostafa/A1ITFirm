import React from "react";
import cn from "clsx";
import s from "./WhyA1ITFirm.module.css";
import Balancer from "react-wrap-balancer";
import Container from "@components/ui/Container";
import Image from "next/image";
import Text from "@components/ui/Text";

const WhyA1ITFirm = () => {
  return (
    <Container className={cn(s.root, 'fit my-10 rounded-lg p-10')}>
      <Text variant='heading' className='text-start text-4xl mb-5'>Why A1 IT Firm?</Text>
      <div className="w-[30%] h-1 rounded bg-blue my-5" />
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-10 my-10">
        <div className="lg:w-1/2">
          <Image
            src="leadImg.svg"
            alt="LEAD GENERATION"
            className="mt-10 md:mt-0"
            width={680}
            height={680}
          />
        </div>
        <p className='lg:w-1/2 text-sm lg:text-2xl leading-relaxed'>
          A1 IT Firm is more than just a lead generation agency - we&apos;re your partners in success. We&apos;re passionate, experienced, and driven to help businesses thrive. Leveraging the latest technology and marketing tactics, we create personalized strategies to generate high-quality leads aligned with your unique business goals. With us, you&apos;ll receive personalized service, ongoing support, and continuous optimization to maximize your ROI. Choose A1 IT Firm and let&apos;s turn your business dreams into reality!
        </p>
      </div>
    </Container>
  );
};

export default WhyA1ITFirm;
