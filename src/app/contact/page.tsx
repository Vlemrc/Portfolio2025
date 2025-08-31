import AnimatedTitle from "@/components/AnimatedTitle";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-3/4 pl-20 flex flex-col h-full pt-[120px] text-white text-sm">
      <div className="w-1/3">
        <Paragraph starttime={0.6}>
          Thanks for stopping by. I hope you like your visit here. This site reflects my path, exploring, growing, and
          leaving traces that matter.
        </Paragraph>
      </div>
      <AnimatedTitle text="let&apos;s connect" className="text-[200px]/[1.2] font-arges uppercase font-bold text-white" delay={50} />
      <div className="w-1/3">
        <Paragraph className="mt-10" starttime={1}>
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
  );
}