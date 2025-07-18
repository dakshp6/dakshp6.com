"use client";
import { useEffect, useState } from "react";
import Solari from "./Solari";
import "@/components/ui/styles/Display.css"
import ClientOnly from "../common/ClientOnly";
import SolariPlaceholder from "./placeholders/SolariPlaceholder";


export default function Display() {

  const [windowWidth, setWindowWidth] = useState(448);

  useEffect(() => {

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (windowWidth >= 448) {
    return (
      <ClientOnly placeholder={<SolariPlaceholder />}>
        <Solari />
      </ClientOnly>
    )
  }
  else {
    return (
      <div className="text-4xl text-nowrap">
        Daksh&apos;s Lounge
      </div>
    )
  }



}