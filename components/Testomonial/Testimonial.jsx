import Container from '@components/ui/Container'
import React from 'react'
import cn from 'clsx'
import s from './Testimonial.module.css'
import Text from '@components/ui/Text'
import TestimonialCard from '@components/ui/TestimonialCard'
import ParallaxMarquee from '@components/ParalaxComponent/ParallaxComponent '

const Testimonial = () => {
  const testimonial = [
    {
      reviews: "Great Communication and understanding of the task at hand. Always satisfied with the results provided, would recommend!",
      name: "Nicolaas",
      title: "Fiverr Marketplace",
      avatar: "",
    },
    {
      reviews: "Everything was perfect and delivered as promised! The final delivery was actually even faster than the initial expectation. These leads will be invaluable to building the brand the business. I definitely recommend Sarif for any lead generation. Thank you for everything!",
      name: " J. Rich",
      title: "Fiverr Marketplace",
      // avatar: "",
    },
    {
      reviews: "This was the first time I used Fiverr and the first time I used Shojol. I provided a challenging set of criteria for data to be found. Other similar providers said they couldn't do it. Shojol absolutely delivered exactly what I wanted. I will be ordering again now.",
      name: "Rob",
      title: "Fiverr Marketplace",
      // avatar: "",
    },
    {
      reviews: "This is the second time working with Shojol and once again I'm very satisfied. Instead of bullshitting, he worked with me to find a good solution and delivered an excellent result. Will recommend and use again. Thanks for your great service.",
      name: "Rob",
      title: "Fiverr Marketplace",
      // avatar: "",
    },
    {
      reviews: "Tamjid did a great job at handling a number of issues coming from the design specs I gave him. I am very happy with the process, communication, inputs and code he wrote. He seems very knowledgeable and result-oriented!",
      name: "SF White",
      title: "Fiverr Marketplace",
      // avatar: "",
    },
    {
      reviews: "Good communication involves asking for additional information when necessary",
      name: "Alex Sonseraus",
      title: "Fiverr Marketplace",
      // avatar: "",
    },
    {
      reviews: "Great job finding us leads in our niche. Will hire again.",
      name: "Anthony S",
      title: "Upwork Marketplace",
      // avatar: "",
    },
  ]
  return (
    <div
      className={cn(s.root, '')}
    >

      <Container className={cn(s.container, 'py-10')}>
        <div className='w-50%'>
          <Text variant='newsletter'>
            Still on the fence, here’s what{' '}
            <span className={cn('text-transparent bg-clip-text bg-gradient-to-b from-blue to-cyan')}>our clients</span> are saying
          </Text>

        </div>

        <ParallaxMarquee start={2000} end={-2000}>
          {testimonial.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </ParallaxMarquee>
      </Container>
    </div>
  )
}

export default Testimonial