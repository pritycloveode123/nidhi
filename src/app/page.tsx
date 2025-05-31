import Hero from "@/components/home/hero-section";
import ImageRow from "@/components/home/marquee";
import Services from "@/components/home/services";
import Card from "@/components/home/card";
import Case from "@/components/home/case";
import Testimonial from "@/components/home/testimonial";
import Work from "@/components/home/work";
import Faq from "@/components/home/faq";



export default function Home() {
  return (
    <>
      <Hero />
      <ImageRow />
      <Services />
      <Card />
      <Case />
      <Testimonial />
      <Work />
      <Faq />
    </>
  );
}
