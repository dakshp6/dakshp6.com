"use client";

import { useEffect, useState, useCallback, useMemo } from "react"
import '@/components/custom/styles/Solari.css'
import {FlapDisplay} from 'react-split-flap-effect'
import { setInterval } from "timers";

export default function Solari() {

  const [step, setStep] = useState(0)

  const displayStates = ['Is it a website?', 'Is it a jukebox?', 'It\'s...', 'Daksh\'s Lounge'];

  const handleStepChange = useCallback(() => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      return nextStep >= displayStates.length ? prevStep : nextStep;
    });
  }, [displayStates.length]);

  const length = useMemo(()=> {

    if(step == displayStates.length-1)
      {
        return displayStates[step].length
      }
      return 16

  }, [step, displayStates])

  useEffect(()=>{
    const interval = setInterval(handleStepChange, 3000);
    return () => clearInterval(interval);
  },[handleStepChange]);

  return (
            <FlapDisplay
            className={`custom`}
            chars={" ABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,'"}
            length={length}
            value={displayStates[step]}
            timing={38}
            padMode={"auto"}
            hinge={false}
          />

        )
}
