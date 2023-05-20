import AboutUs from "@components/AboutUs/AboutUs";
import Hero from "@components/Hero";
import Newsletter from "@components/Newsletter";
import OurServices from "@components/OurServices/OurServices";
import Pricing from "@components/Pricing";
import Testimonial from "@components/Testomonial/Testimonial";
import Whatwedo from "@components/What we do/Whatwedo";
import WhyA1ITFirm from "@components/WhyA1ITFirm/WhyA1ITFirm";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <div className="gradient-03 rectangle" />
      <Whatwedo />
      <div className="gradient-01 rectangle2" />
      <div className="relative">
        <Pricing />
        <WhyA1ITFirm />
        <div className="gradient-01 rectangle2 z-[-1]" />
      </div>
      <div className="relative">
        {/* <AboutUs /> */}
        <Testimonial />
      </div>
      <div className="relative">
        <Newsletter />
        <div className="gradient-06 z-[-1]" />
      </div>
    </div>
  );
}
