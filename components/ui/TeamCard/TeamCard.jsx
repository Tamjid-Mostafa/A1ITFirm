import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Text from '../Text';
const TeamCard = ({ item }) => {
  return (
    <div className="bg-white px-5 py-10
    rounded-lg w-[380px]">
      <div className="flex justify-center">
        <Image
          width={280}
          height={280}
          src={item?.image}
          alt={item?.name}
          quality={100}
          className="rounded-full"
        />
      </div>
      <div className="my-10 text-center">
        <Text variant='pageHeading' className="text-[#408DB6] text-2xl">{item?.name}</Text>
        <Text className="text-[#408DB6] text-2xl">{item?.title}</Text>
 
      </div>
      <div className='flex gap-10 justify-center'>
        <div>
          <FaLinkedin className='text-3xl text-accent-6 hover:text-accent-9 hover:scale-105 transition-all duration-300' />
        </div>
        <div>
          <FaEnvelope className='text-3xl text-accent-6 hover:text-accent-9 hover:scale-105 transition-all duration-300' />
        </div>
      </div>
    </div>
  )
}

export default TeamCard