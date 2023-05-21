import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Marquee from "react-fast-marquee";

const ParallaxMarquee = ({ children, start, end }) => {
  const { scrollYProgress } = useScroll()
  const translateX = useTransform(scrollYProgress, [0, 1], [start, end])

  return (
    <Marquee autoFill gradient gradientColor={[224, 242, 254]}  gradientWidth={100}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} style={{ x: translateX }}>
          {child}
        </motion.div>
      ))}
    </Marquee>
  )
}

export default ParallaxMarquee
