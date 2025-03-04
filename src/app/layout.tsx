import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Daksh's Lounge",
  icons: {
    icon: "/daksh.png"
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

        {children}
      
      </body>
    </html>
  );
}
