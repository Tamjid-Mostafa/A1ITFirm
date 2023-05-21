import React from 'react'
import Container from '@components/ui/Container'
import Text from '@components/ui/Text'

const AboutUs = () => {
  return (
    <Container>
      <Text variant='heading'>About Us</Text>
      <div className="w-[30%] h-1 rounded bg-blue my-5" />
      <p>
        At A1 IT Firm, we prioritize our clients&apos; growth and satisfaction above everything else. 
        We leverage innovative technology, strategic creativity, and data-driven insights to 
        deliver results that exceed expectations. Our comprehensive suite of digital services 
        is designed to boost your business&apos;s online presence, engage your audience, and drive growth.
      </p>
    </Container>
  )
}

export default AboutUs;
