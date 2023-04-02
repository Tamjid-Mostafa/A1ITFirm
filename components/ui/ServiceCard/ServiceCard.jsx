import Image from 'next/image'
import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className="bg-white p-5
    rounded-[50px] w-[60%]">
     <div className="flex justify-center">
       <Image
         width={580}
         height={220}
         src={service?.logo}
         alt={service?.title}
         className="rounded-[30px]"
       />
     </div>
     <div className="w-[80%] mx-auto my-10">
       <p className="text-[#408DB6] text-2xl my-3">{service?.title}</p>
       <p className="text-black">{service?.info}</p>
     </div>
   </div>
  )
}

export default ServiceCard