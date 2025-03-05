import { Button } from "@/components/ui/button"
import Link from "next/link";
import Display from "@/components/custom/Display";


export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN

  return (
  <div>
    <section id = "body" className="flex flex-col items-center p-10 m-10 overflow-hidden">
      
      <section id="Solari" className="flex-1 flex justify-center p-10 w-full">
        
        <div className="p-4">
          <Display/>
        </div>
      </section>

      <section id="content" className="flex-1 flex flex-col gap-y-4 p-10">

      <div className="p-4 flex flex-col lg:flex-row gap-x-4 items-center">

{
/*
        <div className="border border-green-500 place-content-center">
          {<Image src={daksh} alt={""} className="bg-zinc-100 rounded-full min-w-64 sm:w-80 md:w-80 lg:w-auto xl:w-96" ></Image>}
        </div>
*/
}

        <div className="flex flex-col m-10 lg:m-0 gap-y-12 p-2">

          <div className="">
            Hi! Welcome to my lounge. I&apos;m Daksh and this is my digital corner where soon you&apos;ll be able to listen to music and have some fun getting to know me :) . 
            This website will become a home for my portfolio and also a way for me to show off a bit of my personality! Check out the links below if you want to connect with me!
          </div>

          <div className="flex flex-row gap-x-8 justify-center">
            <Button variant="outline" asChild className="h-12">
              <Link href={linkedin ?? "/"} rel="noopener noreferrer" target="_blank">LinkedIn</Link>
            </Button>
            <Button variant="outline" asChild className="h-12">
            <Link href={github ?? "/"} rel="noopener noreferrer" target="_blank">GitHub</Link>
            </Button>
          </div>
        </div>
      </div>
      </section>
{

/*

      <section className="flex-1 mt-10 p-10">

          <div className="flex items-center m-10 p-8">
          </div>

      </section>


      <section className="flex-1 mt-10 p-10">

        <div className="flex m-10 p-8">
        </div>

      </section>


      <section className="flex-1 mt-10 p-10">

        <div className="flex m-10 p-8">
        </div>

      </section>
*/
}
      </section>

    <footer className="fixed bottom-0">
    </footer>
  </div>
  );
}
