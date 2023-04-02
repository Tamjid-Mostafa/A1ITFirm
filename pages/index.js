import AboutUs from "@components/AboutUs/AboutUs";
import Hero from "@components/Hero";
import Newsletter from "@components/Newsletter";
import OurServices from "@components/OurServices/OurServices";
import Testimonial from "@components/Testomonial/Testimonial";
import WhyA1ITFirm from "@components/WhyA1ITFirm/WhyA1ITFirm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyA1ITFirm />
      <OurServices />
      <AboutUs />
      <Testimonial />
      <Newsletter />
    </>
  );
}
