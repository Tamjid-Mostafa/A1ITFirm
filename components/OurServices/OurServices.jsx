import Button from "@components/ui/Button/Button";
import Container from "@components/ui/Container";
import ServiceCard from "@components/ui/ServiceCard/ServiceCard";
import { SERVICE_DATA } from "data/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const OurServices = () => {
  const router = useRouter();
  return (
    <div className="py-20 bg-[#E7F5F2]">
      <Container>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-black">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">
            Services
          </span>
        </h1>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-10 mt-20 ">
          {SERVICE_DATA.slice(0, 4).map((service, index) => (
           <ServiceCard key={index} service={service}/>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button
          onClick={() => router.push("/our-services")}
          variant="gradient" className="hover:text-white">
            View All
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
