import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import AudioPlayer from "@/components/custom/AudioPlayer";
import { Main } from "next/document";


export const metadata: Metadata = {
  title: "Daksh's Lounge",
  icons: {
    icon: "/daksh_icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text w-full h-full">
        <Navbar/>

        <main className="pb-32">
          {children}
        </main>
        <AudioPlayer></AudioPlayer>
      </body>
    </html>
  );
}
