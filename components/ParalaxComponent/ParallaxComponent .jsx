import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Marquee from "react-fast-marquee";
import useWindowSize from '@lib/hooks/use-window-size';

const ParallaxMarquee = ({ children, start, end }) => {
  const { scrollYProgress } = useScroll()
  const translateX = useTransform(scrollYProgress, [0, 1], [start, end])
  const { isMobile } = useWindowSize()

  return (
    <Marquee autoFill gradient gradientColor={[224, 242, 254]} gradientWidth={isMobile ? 20 : 100}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} style={{ x: translateX }}>
          {child}
        </motion.div>
      ))}
    </Marquee>
  )
}

export default ParallaxMarquee
