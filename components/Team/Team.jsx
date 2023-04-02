import Container from '@components/ui/Container'
import TeamCard from '@components/ui/TeamCard/TeamCard'
import { team } from 'data/constant'
import React from 'react'

const Team = () => {
  return (
    <div>
        <div className="py-20 bg-[#E7F5F2]">
            <Container>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-ClashDisplay-Bold text-black">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]">
                Team
                </span>
              </h1>
              <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-x-40 gap-y-10 mt-20 mx-24">
                {team.map((item, index) => (
                 <TeamCard key={index} item={item}/>
                ))}
              </div>
             
            </Container>
          </div>
    </div>
  )
}

export default Team