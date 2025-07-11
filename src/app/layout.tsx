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
      <body className="bg-background text-text w-full flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full p-4 bg-zinc-800 border-b border-zinc-600">
          <Navbar/>
        </header>
        <main className="flex-1 p-4 pb-24">
          {children}
        </main>
        <footer className="border-t border-zinc-600 fixed bottom-0 w-full">
          <AudioPlayer/>
        </footer>
      </body>
    </html>
  );
}
