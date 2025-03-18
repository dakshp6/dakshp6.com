import { Button } from "@/components/ui/button"
import Link from "next/link";
import Display from "@/components/custom/Display";


export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN

  return (
  <div>
    <section id = "body" className="flex flex-col items-start gap-y-6 overflow-hidden p-4">
      
      <section id="Space" className=""/>

      <section id="Solari" className="flex-1 flex justify-center w-full p-4 lg:p-8 xl:p-10">
        
        <div className="">

          <Display/>
        
        </div>

      </section>

      <section id="content" className="flex-1 flex flex-col gap-y-8 justify-center items-center p-4 lg:p-8 xl:p-10  w-full">

          <div className="text-sm md:text-lg lg:text-xl xl:text-2xl p-4 lg:p-8 xl:p-12">
            Hey there! Welcome to my little corner of the internet. I&apos;m Daksh, and this is my digital lounge. 
            A space where you&apos;ll soon be able to enjoy some music and venture into my world. 
            Think of this site as part portfolio and part playground, where I can show off my work and my personality. If you want to connect with me, check out the links below! 🙂
          </div>

          <div className="flex flex-row gap-x-12 place-content-center">

            <Button variant="outline" asChild className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:h-12 lg:w-24 xl:h-16 xl:w-32">
              <Link href={linkedin ?? "/"} rel="noopener noreferrer" target="_blank">LinkedIn</Link>
            </Button>
            
            <Button variant="outline" asChild className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:h-12 lg:w-24 xl:h-16 xl:w-32">
              <Link href={github ?? "/"} rel="noopener noreferrer" target="_blank">GitHub</Link>
            </Button>
          
          </div>

      </section>
    </section>
  </div>
  );
}
