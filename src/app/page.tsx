import { Button } from "@/components/ui/button"
import Solari from "@/components/custom/Solari";
import { GoRocket } from "react-icons/go";
import Link from "next/link";





export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN
  const resume = process.env.RESUME

  return (
    <section className="h-full border border-blue-500 flex flex-col justify-between p-10 m-10">
      
      <section id="Solari" className=" flex-1 flex flex-row justify-start gap-x-2 p-8 flex-shrink w-full">
        
        <div className="flex items-center">
          <GoRocket className="size-16 fill-zinc-100"/>
        </div>
        
        <div className="flex items-center">
          <Solari/>
        </div>
      </section>

      <section id="body" className="flex-1 border border-red-500 mt-10 flex flex-col items-start gap-y-4 p-10">

        <div>
          This is the body to my website, I intend to use this space to discuss about nothing really, but it would be a good place to park my projects and resume links or something. Not sure yet!
        </div>

        <div className=" flex flex-row mt-4 gap-x-4 flex-shrink flex-wrap">
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
      </section>

      <section className="flex-1 border border-red-500 mt-10 p-10">

          <div className="flex border border-yellow-500 m-10 p-8">
            
          </div>

      </section>


      <section className="flex-1 border border-red-500 mt-10 p-10">

      <div className="flex border border-yellow-500 m-10 p-8">
        
      </div>

      </section>


      <section className="flex-1 border border-red-500 mt-10 p-10">

      <div className="flex border border-yellow-500 m-10 p-8">
        
      </div>

      </section>
      


    </section>
  );
}
