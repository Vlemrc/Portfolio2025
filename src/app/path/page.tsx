import AnimatedTitle from "@/components/AnimatedTitle"
import Education from "@/components/Education"
import Experiences from "@/components/Experiences"
import Paragraph from "@/components/Paragraph"
import Resume from "@/components/Resume"
import SocialIcons from "@/components/SocialIcons"

export default function PathPage() {
  return (
    <div className="w-3/4 pl-20 pt-[70px] flex flex-row h-fit items-end justify-between pr-10">
      <div className="text-white w-1/2">
        <AnimatedTitle text="I&apos;m&nbsp;a&nbsp;spinosaur" className="text-[200px]/[1.2] font-arges uppercase font-bold text-white mb-10" delay={50} />
        <div className="text-gray-300 w-3/4 text-sm">
          <Paragraph starttime={0.800} content="Millions of years of evolution… and I ended up making websites. Part designer, part developer, part dinosaur. 100% passionate about building great things. Extinct? Maybe. Skilled? Definitely." />
        </div>
        <h3 className="pt-10 uppercase text-[10px] font-bold pb-5 text-white">TOOL STACK</h3>
        <ul className="flex flex-col text-xs font-light mb-10">
          <li>PHP</li>
          <li>Javascript - TypeScript</li>
          <li>React - Next.js</li>
          <li>Express - Node.js</li>
          <li>GSAP - Motion</li>
          <li>PostgreSQL</li>
          <li>TailwindCSS - CSS in JS</li>
          <li>Git - Github</li>
          <li>Wordpress</li>
          <li>Webflow</li>
          <li>AWS</li>
        </ul>
        <SocialIcons />
        <Resume />
      </div>
      <div className="flex flex-col mb-14">
        <Experiences />
        <Education />
      </div>
    </div>
  )
}
