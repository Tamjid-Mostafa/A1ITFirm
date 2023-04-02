import React from 'react'
import cn from 'clsx'
import s from './Hero.module.css'
import Image from 'next/image'
import Button from '@components/ui/Button'
import Balancer from 'react-wrap-balancer'
import Container from '@components/ui/Container'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import BG from '@components/ui/BG/BG'
export const hero = [
    {
        title: 'Unlock Your Business Potential with Our Lead Generation Service!',
        description: "Are you ready to take your business to the next level? Our lead generation agency can help you unlock its full potential! We use the latest technology and proven marketing tactics to generate top-quality leads that are tailored to your specific business goals. Our team of experts is dedicated to helping you achieve success, and we're passionate about what we do. Don't settle for mediocre results - let us help you reach your full potential and achieve your business dreams!",
        img: '/herobg1.jpg',
    },
    {
        title: 'Unlock Your Business Potential with Our Lead Generation Service!',
        description: "Are you ready to take your business to the next level? Our lead generation agency can help you unlock its full potential! We use the latest technology and proven marketing tactics to generate top-quality leads that are tailored to your specific business goals. Our team of experts is dedicated to helping you achieve success, and we're passionate about what we do. Don't settle for mediocre results - let us help you reach your full potential and achieve your business dreams!",
        img: '/herobg2.jpg',
    },
    {
        title: 'Unlock Your Business Potential with Our Lead Generation Service!',
        description: "Are you ready to take your business to the next level? Our lead generation agency can help you unlock its full potential! We use the latest technology and proven marketing tactics to generate top-quality leads that are tailored to your specific business goals. Our team of experts is dedicated to helping you achieve success, and we're passionate about what we do. Don't settle for mediocre results - let us help you reach your full potential and achieve your business dreams!",
        img: '/herobg3.jpg',
    }
]
const Hero = () => {


 

    return (
        <main className={cn(s.root)}>
           
            <>
                <Swiper
                    // install Swiper modules
                    modules={[ Pagination, A11y, FreeMode]}
                    spaceBetween = {0}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    pagination={{ clickable: true }}
                >
                    {
                        hero.map((item, index) => (
                            <SwiperSlide key={index}>
                                 <BG bg={item.img}/>
                                 <div className={cn(s.backdrop)}/>
                              <Container
                              className={cn(s.container, 'fit')}
                              >
                              <div className={cn(s.content, "")}>
                                    <h1 className={cn(s.title, '')}>
                                        <Balancer>
                                            {item.title}
                                        </Balancer>
                                    </h1>
                                    <p className={cn(s.description, '')}>
                                        <Balancer>
                                        {item.description}
                                        </Balancer>
                                    </p>
                                    <Button 
                                    className="hover:text-white"
                                    variant='gradient'>
                                        Request Demo
                                    </Button>
                                </div>
                               {/* <Image
                               width={300}
                               height={300}
                            layout="responsive"
                               quality={100}
                               src={item.img}
                               alt=''
                               /> */}
                              </Container>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </main>
    )
}

export default Hero;
