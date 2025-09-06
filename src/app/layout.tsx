import type { Metadata } from "next";
import "@/styles/normalize.css";
import "@/styles/variables.css";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Victor Lemercier",
  description: "Portfolio of Victor Lemercier, Creative Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-full flex flex-row w-full">
          <Background />
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
