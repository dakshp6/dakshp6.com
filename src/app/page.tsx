import { Button } from "@/components/ui/button"
import { GoRocket } from "react-icons/go";
import Link from "next/link";
import AudioPlayer from "@/components/custom/AudioPlayer";
import Display from "@/components/custom/Display";


export default function Home() {

  const github = process.env.GITHUB
  const linkedin = process.env.LINKEDIN
  const resume = process.env.RESUME

  return (
  <div>
    <section className="border border-blue-500 flex flex-col items-center p-10 m-10">
      
      <section id="Solari" className="border border-red-500 flex-1 flex flex-row justify-center gap-x-2 p-8">
        
        <div className="border border-yellow-500 flex items-center">
          <GoRocket className="xs:size-2 sm:size-4 md:size-8 lg:size-16 xl:size-16 2xl:size-20 fill-zinc-100"/>
        </div>
        
        <div className="border border-white-500 flex items-center">
          <Display/>
        </div>
      </section>

      <section id="body" className="flex-1 border border-red-500 mt-10 flex flex-col items-start gap-y-4 p-10">

      <div className="border border-yellow-500">
        <div>
          This is the body to my website, I intend to use this space to discuss about nothing really, but it would be a good place to park my projects and resume links or something. Not sure yet!
        </div>

        <div className="flex flex-row mt-4 gap-x-4 flex-shrink flex-wrap">
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
