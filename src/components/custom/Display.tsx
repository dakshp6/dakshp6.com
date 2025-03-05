"use client";
import { useEffect, useState } from "react";
import Solari from "./Solari";
import "@/components/custom/styles/Display.css"


export default function Display(){


    const [windowWidth, setWindowWidth] = useState(448);
    
      useEffect(() => {

        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      if (windowWidth >= 448)
      {
        return <div>
        <Solari/>
      </div>
      }
      else{
        return <div className="text-4xl text-nowrap">
          Daksh&apos;s Lounge
        </div>
      }



}