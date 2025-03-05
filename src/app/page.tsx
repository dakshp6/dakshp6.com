import { Button } from "@/components/ui/button"
import Link from "next/link";
import Display from "@/components/custom/Display";


export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN

  return (
  <div>
    <section id = "body" className="border flex flex-col items-center gap-y-6 overflow-hidden p-4">
      
      <section id="Space" className=""/>

      <section id="Solari" className="border flex-1 flex justify-center w-full p-4 lg:p-8 xl:p-10">
        
        <div className="border">
          <Display/>
        </div>
      </section>

      <section id="content" className="border flex-1 flex flex-col gap-y-8 justify-center items-center p-4 lg:p-8 xl:p-10  w-full">

          <div className="border text-sm md:text-lg lg:text-xl xl:text-2xl p-4 lg:p-8 xl:p-12">
            Hey there! Welcome to my little corner of the internet. I&apos;m Daksh, and this is my digital lounge. 
            A space where you&apos;ll soon be able to enjoy some music and venture into my world. 
            Think of this site as part portfolio and part playground, where I can show off my work and my personality. If you want to connect with me, check out the links below! :)
          </div>

          <div className="border flex flex-row gap-x-8">

            <Button variant="outline" asChild className="h-12">
              <Link href={linkedin ?? "/"} rel="noopener noreferrer" target="_blank">LinkedIn</Link>
            </Button>
            
            <Button variant="outline" asChild className="h-12">
              <Link href={github ?? "/"} rel="noopener noreferrer" target="_blank">GitHub</Link>
            </Button>
          
          </div>

      </section>
    </section>
  </div>
  );
}
