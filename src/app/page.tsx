import { Button } from "@/components/ui/button"
import { GoRocket } from "react-icons/go";
import Link from "next/link";
import AudioPlayer from "@/components/custom/AudioPlayer";
import Display from "@/components/custom/Display";
import Image from "next/image";
import daksh from "../../public/daksh.png"


export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN
  const resume = process.env.RESUME

  return (
  <div>
    <section className="border border-blue-500 flex flex-col items-center p-10 m-10">
      
      <section id="Solari" className="border border-red-500 flex-1 flex flex-row justify-center gap-x-2 p-8">
        
        <div className="border border-white-500 flex items-center">
          <Display/>
        </div>
      </section>

      <section id="body" className="flex-1 border border-red-500 mt-10 flex flex-col items-start gap-y-4 p-10">

      <div className="border border-yellow-500 p-4 flex flex-row gap-x-4 h-full">

        <div className="border border-green-500 place-content-center w-72">
          <Image src={daksh} alt={""} className="bg-zinc-100 rounded-full" ></Image>
        </div>

        <div className="mt-10 border border-pink-500 flex flex-col gap-y-4 p-2">

          <div>
            Hi! Welcome to Daksh's Lounge. I'm Daksh and this is my digital lounge where you can listen to music and have some fun getting to know me. Feel free to poke around and find the little easter eggs on my site :) . 
            If you didn't know already, I'm big on music and creativity in general, so this website was my way to make a portfolio but also expressing my personality through code! Check out the links below if you want to connect professionally.
          </div>

          <div className="flex flex-row mt-4 gap-x-4 flex-shrink flex-wrap justify-center">
            <Button variant="outline" asChild >
              <Link href={linkedin ?? "/"} rel="noopener noreferrer" target="_blank">LinkedIn</Link>
            </Button>
            <Button variant="outline" asChild>
            <Link href={github ?? "/"} rel="noopener noreferrer" target="_blank">GitHub</Link>
            </Button>
            <Button variant="outline" asChild>
            <Link href={resume ?? "/"} rel="noopener noreferrer" target="_blank">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
      </section>

      <section className="flex-1 border border-red-500 mt-10 p-10">

          <div className="flex border items-center border-yellow-500 m-10 p-8">
            Test1
          </div>

      </section>


      <section className="flex-1 border border-red-500 mt-10 p-10">

      <div className="flex border border-yellow-500 m-10 p-8">
        Test2
      </div>

      </section>


      <section className="flex-1 border border-red-500 mt-10 p-10">

      <div className="flex border border-yellow-500 m-10 p-8">
        Test3
      </div>

      </section>
    </section>

    <footer className="fixed bottom-0">
    </footer>
  </div>
  );
}
