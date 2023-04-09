import ServiceCard from '@components/ui/ServiceCard/ServiceCard';
import { SERVICE_DATA } from 'data/constant';
import React from 'react';

const Our_Services = () => {
    return (
        <div className="py-20 bg-[#E7F5F2]">
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center  text-black">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">
            Services
          </span>
        </p>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-10 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto mt-20">
          {SERVICE_DATA.map((service, index) => (
           <ServiceCard key={index} service={service}/>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Our_Services;