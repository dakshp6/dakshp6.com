import type { Metadata } from "next";
import "./globals.css";
import AudioPlayer from "@/components/custom/AudioPlayer";

export const metadata: Metadata = {
  title: "Daksh's Lounge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text">

        {children}
      
      </body>
      <section className="fixed bottom-0 bg-zinc-700 w-screen p-8">
        <AudioPlayer/>
      </section>
      
    </html>
  );
}
