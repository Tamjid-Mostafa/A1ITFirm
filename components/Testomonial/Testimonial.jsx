import Container from '@components/ui/Container'
import React from 'react'
import cn from 'clsx'
import s from './Testimonial.module.css'
import Text from '@components/ui/Text'
import TestimonialCard from '@components/ui/TestimonialCard'
import Marquee from 'react-fast-marquee'
import ParallaxMarquee from '@components/ParalaxComponent/ParallaxComponent '
import GradientSVG from '@components/ui/BG/GradientSVG'
// // import Swiper core and required modules
// import { Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonial = [
    {
      reviews: "Africash is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.",
      name: "Neha Gupta",
      title: "Entrepreneur",
      avatar: "/neha.png",
    },
    {
      reviews: "With Africash, it’s so easy to buy goods in Africa and have them sent directly to my home. It’s my go to app.",
      name: "Tejas Sharma",
      title: "Student",
      avatar: "/tejas.png",
    },
    {
      reviews: "The service is amazing and i will be using it again in the future. Thank you Africash for making international trading easier with your service.",
      name: "Rajat Pawar",
      title: "Teacher",
      avatar: "/rajat.png",
    },
    {
      reviews: "Africash is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.",
      name: "Neha Gupta",
      title: "Entrepreneur",
      avatar: "/neha.png",
    },
    {
      reviews: "With Africash, it’s so easy to buy goods in Africa and have them sent directly to my home. It’s my go to app.",
      name: "Tejas Sharma",
      title: "Student",
      avatar: "/tejas.png",
    },
    {
      reviews: "The service is amazing and i will be using it again in the future. Thank you Africash for making international trading easier with your service.",
      name: "Rajat Pawar",
      title: "Teacher",
      avatar: "/rajat.png",
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
        <div className='w-full h-full flex justify-center'>
          {/* <Swiper
          // install Swiper modules
          modules={[Pagination, A11y, Autoplay, FreeMode]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints= {{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {
            testimonial.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              )
            }
            )
          }
        </Swiper> */}
         
        </div>
      </Container>
      <ParallaxMarquee start={2000} end={-2000}>
      {testimonial.map((item, index) => (
        <TestimonialCard key={index} item={item} />
      ))}
    </ParallaxMarquee>
    </div>
  )
}

export default Testimonial