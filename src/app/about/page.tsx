import Echoes from '@/components/Echoes'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="w-3/4 pl-20 pt-[160px] flex flex-row">
      <div className="text-white">
        <h1 className="text-[200px]/[1.2] font-arges">511</h1>
        <p className="text-gray-300 w-[40%]">
          Nice to meet you. I’m Victor Lemercier, a web developer based in Paris and a recent Master’s graduate. I aim to bring creativity and attention to detail to innovative projects. Driven to deliver seamless user experiences, I balance creativity with solid technical foundations built through my agency experience.
        </p>
        <Echoes />
      </div>
        <div className="flex flex-col">
            <Image src="/PProfilClearBg.png" alt="Me" className="rounded-lg w-[156px] h-[156px] object-cover" width={156} height={156} />
            <h3 className="pt-12 uppercase text-xs font-bold pb-2.5 text-white">My background</h3>
            <div className="flex flex-col gap-2">
                <p className="text-gray-300">
                Growing up in Bayeux, a symbol of France&apos;s resilience during WWII, my home was a vibrant mix of creativity and analytical thinking, shaped by my father&apos;s career as an IT Specialist and my mother&apos;s work as a shopkeeper. This unique environment profoundly influenced my outlook.
                </p>
                <p className="text-gray-300">
                My fascination with technology began at age five, sparked by our trusty grey computer. While I pursued a degree in Digital Project Management, my true passion lies in the transformative art of web development.
                </p>
                <p className="text-gray-300">
                My curiosity led me to wonder: could I also create something that can evoke this effect on people?
                </p>
                <p className="text-gray-300">
                Today, I apply my design & development skills, aiming to create solutions that make people feel and remember, elevating everyday experiences into inspiring solutions.
                </p>
            </div>
        </div>
      </div>
  )
}
