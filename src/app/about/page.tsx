"use client"
import AnimatedTitle from '@/components/AnimatedTitle'
import Echoes from '@/components/Echoes'
import Paragraph from '@/components/Paragraph'
import Resume from '@/components/Resume'
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 0);
    const timerImage = setTimeout(() => setShowImage(true), 1700);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerImage);
    };
  }, []);

  return (
    <div className="w-3/4 pl-20 pt-[70px] flex flex-row">
      <div className="text-white">
        <div className="text-[200px]/[1.2] font-arges flex flex-row mb-12">
          <AnimatedTitle text="511" className="text-[200px]/[1.2] font-bold text-white" delay={100} />
        </div>
        <div className="text-gray-300 w-3/4 text-sm">
          <Paragraph>
            Nice to meet you. I’m Victor Lemercier, a web developer based in Paris and a recent Master’s graduate. I aim to bring creativity and attention to detail to innovative projects. Driven to deliver seamless user experiences, I balance creativity with solid technical foundations built through my agency experience.
          </Paragraph>
        </div>
        <Echoes />
      </div>
        <div className="flex flex-col pr-10">
            <div className="flex justify-end">
                <Image src="/PProfilClearBg.png" alt="Me" className={`rounded-lg w-[140px] h-[140px] object-cover ${showImage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} width={156} height={156} />
            </div>
            <div className="overflow-hidden mt-10 mb-5 min-h-4">
              <h3 className={`uppercase text-[10px] font-bold text-white transition-transform duration-500 ${showTitle ? 'translate-y-0' : '-translate-y-6'}`}>My background</h3>
            </div>
            <div className="flex flex-col gap-6 text-sm mb-14 text-gray-300">
                <Paragraph starttime={0.2}>
                  Growing up in Bayeux, a symbol of France&apos;s resilience during WWII, my home was a vibrant mix of creativity and analytical thinking, shaped by my father&apos;s career as an IT Specialist and my mother&apos;s work as a shopkeeper. This unique environment profoundly influenced my outlook.
                </Paragraph>
                <Paragraph starttime={0.45}>
                  My fascination with technology began at age five, sparked by our trusty grey computer. While I pursued a degree in Digital Project Management, my true passion lies in the transformative art of web development.
                </Paragraph>
                <Paragraph starttime={0.8}>
                  My curiosity led me to wonder: could I also create something that can evoke this effect on people?
                </Paragraph>
                <Paragraph starttime={1}>
                  Today, I apply my design & development skills, aiming to create solutions that make people feel and remember, elevating everyday experiences into inspiring solutions.
                </Paragraph>
            </div>
            <Resume />
        </div>
      </div>
  )
}
