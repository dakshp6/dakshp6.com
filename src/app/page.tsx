'use client'

import { FlapDisplay } from "react-split-flap-effect"
import { Button } from "@/components/ui/button"
import '@/components/custom/flapdisplay.css'
import { useEffect, useRef, useState } from "react"

const Words = [
  'Hello There!',
  'My name is Daksh.',
  'Welcome to my site :)',
]


export default function Home() {

  const [value, setValue] = useState('')
  const [length, setLength] = useState(0)
  const [count, setCount] = useState(0) 

  const getPhrase = (index) => {

    if(index >= Words.length)
    {
      return Words[Words.length-1]
    }
    
    return Words[index % Words.length]
    
  }

  useEffect(() => {
      
      setValue(getPhrase(count))
      setLength(getPhrase(count).length)
      
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          const newPhrase = getPhrase(newCount);
          setLength(newPhrase.length)
          setValue(newPhrase);
          return newCount;
        });
      }, 4000)

      return () => {
        clearInterval(timer)
      }
  }, [])


  return (
    <section className="h-full border border-blue-500 flex flex-col justify-between p-10 m-10">
      
      <section id="name-flap-display" className="flex-1 border border-red-500 flex p-8">
        <FlapDisplay
        className={`custom`}
          theme
          chars={"1234567890qwertyuiopasdfghjklzxcvbnm!,.':) "}
          length={length}
          value={value}
          timing={35}
          padMode={"auto"}
          hinge={true}
        />
      </section>

      <section id="body" className="flex-1 border border-red-500 mt-10 
                  flex flex-col items-start p-10">

        <div className="flex border border-white p-8 m-2">
          This is the body to my website, I intend to use this space to discuss about nothing really, but it would be a good place to park my projects and resume links or something. Not sure yet!
        </div>

        <div className=" flex flex-row p-8 border border-yellow-500 m-2">
          
          <Button className="m-1" variant="outline">Button 1</Button>
          <Button className="m-1" variant="outline">Button 2</Button>
          <Button className="m-1" variant="outline">Button 3</Button>
          <Button className="m-1" variant="outline">Button 4</Button>
          <Button className="m-1" variant="outline">Button 5</Button>

        </div>
      </section>

      <section id="fun-tools-content" className="border border-red-500 p-10 flex justify-evenly flex-1 mt-10">
        
        <section id="fun-tool-pronounciation" className="border border-yellow-500 flex flex-row place-content-center justify-around w-full">
          
          <section className="border border-dotted border-blue-500 flex place-content-center
                              items-center p-8 m-10">
            Name pronounciation
          </section>
          
          <section id="fun-tool-player" className="border border-dotted border-blue-500 
                              flex place-content-center items-center p-8 m-10">
            Spotify Player
          </section>
        
        </section>
      
      
      </section>
    
    
    </section>
  );
}
