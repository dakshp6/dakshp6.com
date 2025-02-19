import type { Metadata } from "next";
import "./globals.css";
import { GoRocket } from "react-icons/go";

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
    </html>
  );
}
