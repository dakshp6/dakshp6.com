"use client";

import { useEffect, useState, useRef, useCallback } from "react"
import '@/components/custom/styles/Solari.css'
import {FlapDisplay} from 'react-split-flap-effect'
import { setInterval } from "timers";

export default function Solari() {

  const [displayValue, setDisplayValue] = useState('Engineer');
  const [displayLength, setDislayLength] = useState(16)
  const [step, setStep] = useState(0)

  const displayStates = ['Is it a website?', 'Is it a jukebox?', 'It\'s.....', 'Daksh\'s Lounge'];

  const handleStepChange = useCallback(() => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      return nextStep >= displayStates.length ? prevStep : nextStep;
    });
  }, [displayStates.length]);

  useEffect(() => {
    setDisplayValue(displayStates[step]);
    setDislayLength(displayStates[step].length)
  }, [step, displayStates]);
  
  useEffect(()=>{
    const interval = setInterval(handleStepChange, 4000);
    return () => clearInterval(interval);
  },[]);

  return (
          <div>
            <FlapDisplay
            className={`custom`}
            chars={" ABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,'"}
            length={displayLength}
            value={displayStates[step]}
            timing={38}
            padMode={"auto"}
            hinge={false}
          />
          </div>
        )
}
