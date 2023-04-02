import React from "react";
import cn from "clsx";
import s from "./WhyA1ITFirm.module.css";
import Balancer from "react-wrap-balancer";
import Container from "@components/ui/Container";
import Image from "next/image";

const WhyA1ITFirm = () => {
  return (
    <main className={cn(s.root)}>
      <Container className={cn(s.container, "fit")}>
        <div className="lg:w-[40%]">
          <Image height={567} width={550} src="/why-quick-fintech.svg" alt="Why Quick Fintech" className="mx-auto" />
        </div>
        <div className={cn(s.content)}>
          <h1 className={cn(s.title)}>
            <Balancer>
              Why <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#226478] to-[#30C7B5]">A1iTFirm?</span>
            </Balancer>
          </h1>
          <p className={cn(s.description, "")}>
            <Balancer>
            At our lead generation agency, we&apos;re not just focused on generating leads - we&apos;re dedicated to helping your business thrive. With years of experience and a passion for marketing, our team has a proven track record of success. We use a data-driven approach to identify your target audience, create customized campaigns, and generate leads that are more likely to convert into paying customers. Plus, we provide ongoing support and optimization to ensure you&apos;re getting the most out of your investment. Choose us and let us help your business unlock its full potential!
            </Balancer>
          </p>
        </div>
      </Container>
    </main>
  );
};

export default WhyA1ITFirm;
