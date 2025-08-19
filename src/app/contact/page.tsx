import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-3/4 pl-20 flex flex-col h-full items-start justify-center text-white text-sm">
      <p>Thanks for stopping by. <br /> I hope you like your visit here. This site reflects my path, <br /> exploring, growing, and leaving traces that matter.</p>
      <h1 className="font-arges text-[200px]/[1.2] uppercase">let&apos;s connect</h1>
      <p>Feel free to reach me by email at victorlemercier.dev@gmail.com <br />
      Here’s my <Link href="https://www.linkedin.com/in/victorlemercier/" target="_blank">LinkedIn</Link></p>
      <p>I am currently seeking a full-time position (CDI), <br /> available from October 2025.</p>
    </div>
  );
}