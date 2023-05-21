import React from 'react'
import cn from 'clsx'
import s from './Hero.module.css'
import Image from 'next/image'
import Button from '@components/ui/Button'
import Container from '@components/ui/Container'
import { useUI } from '@components/ui/context'
import Text from '@components/ui/Text'
import { ChevronRight } from '@components/icons'
import useWindowSize from '@lib/hooks/use-window-size'

const Hero = () => {
    const { openModal } = useUI()
    const { isMobile } = useWindowSize()

    return (
        <Container className={cn(s.root, 'z-10 fit flex flex-col lg:flex-row items-center')}>
            <div className=' space-y-10'>
                <>
                    <Text variant='heading' className={cn(s.heading)}>
                        <span className="block font-bold text-blue">Innovative Marketing Strategy</span>
                        <span className="block font-normal text-4xl md:text-6xl">Designed For</span>
                        <span className="block font-bold text-4xl md:text-6xl">LEAD GENERATION</span>
                    </Text>
                    <div className="w-[30%] h-1 rounded bg-blue my-5" />
                    <div className='text-sm lg:text-2xl'>
                        <p className="text-gray-600 my-2">Experience the A1 IT Firm difference. Our personalized strategies, rooted in a deep understanding of your business and customers, drive measurable results. Leverage our commitment to innovative solutions and enjoy competitive growth and improved digital success.</p>
                    </div>
                </>
                <Button
                    onClick={() => openModal()}
                    variant={isMobile && "slim"}
                    className="rounded-full border-none bg-blue"
                >
                    <span>Request Proposal</span><ChevronRight />
                </Button>
            </div>
            <Image
                src="start-rocket.svg"
                alt="LEAD GENERATION"
                className="mt-10 md:mt-0"
                width={680}
                height={680}
            />
        </Container>
    )
}

export default Hero;
