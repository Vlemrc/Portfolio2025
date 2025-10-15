"use client";
import AnimatedTitle from "@/components/AnimatedTitle";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "@/components/ui/carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion"

export default function ContactPage() {

  const myImgs = [
    "/images/carousel/2.png",
    "/images/carousel/1.jpg",
    "/images/carousel/3.png",
    "/images/carousel/5.png",
    "/images/carousel/7.png",
    "/images/carousel/8.png",
    "/images/carousel/6.png",
    "/images/carousel/IMG_1754.jpg",
    "/images/carousel/11.JPG",
    "/images/carousel/4.png",
  ]

  // Pour les bullets
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="w-full lg:w-3/4 lg:pl-20 lg:pr-0 px-8 flex flex-col h-full pt-[120px] text-white text-sm lg:flex-row justify-between gap-10 lg:gap-0">
      <div className="lg:w-1/3">
        <div className="w-full mb-6 lg:my-0">
          <Paragraph starttime={0.6}>
            Thanks for stopping by. I hope you like your visit here. You can call me at<Link href="tel:+33676166980">06 76 16 69 80.</Link>
          </Paragraph>
        </div>
        <AnimatedTitle text="let&apos;s connect" className="lg:text-[200px]/[1.2] text-[140px]/[1] font-arges uppercase font-bold text-white" delay={50} />
        <div className="w-full">
          <Paragraph className="mt-6 lg:mt-10" starttime={1}>
            Feel free to reach me by email at{" "}
            <Link href="mailto:victorlemercier.dev@gmail.com" target="_blank" className="underline">
              victorlemercier.dev@gmail.com
            </Link>
          </Paragraph>
          <Paragraph starttime={1.1}>
            Here&apos;s my{" "}
            <Link href="https://www.linkedin.com/in/victorlemercier/" target="_blank" className="-translate-x-2 underline">
              LinkedIn
            </Link>
          </Paragraph>

          <Paragraph starttime={1.2}>
            I am currently seeking a full-time position (CDI), available from October 2025.
          </Paragraph>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 1.8, ease: "easeInOut" }}
        id="slider" className="lg:w-1/3 w-full lg:mr-10 h-fit rounded-lg lg:overflow-hidden relative mb-10 lg:mb-0 pb-8 lg:pb-0">
        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          setApi={api => setEmblaApi(api ?? null)}
        >
          <CarouselContent>
            {myImgs.map((src, idx) => (
              <CarouselItem key={idx}>
                <div className="w-full min-h-[500px] lg:min-h-[400px] relative">
                  <Image
                    src={src}
                    alt={`carousel-${idx}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex justify-center gap-1">
            {myImgs.map((_, idx) => (
              <button
                key={idx}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${selectedIndex === idx ? 'bg-white scale-125' : 'bg-white/40'}`}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}