import Display from "@/components/custom/Display";
import ClientOnly from "@/components/common/ClientOnly";
import DisplayPlaceholder from "@/components/custom/placeholders/DisplayPlaceholder";


export default function Home() {

  return (
    <>
      <section id="body" className="flex flex-col items-start gap-y-6 overflow-hidden p-4">

        <section id="Solari" className="flex-1 flex justify-center w-full p-4 lg:p-8 xl:p-10">
          <ClientOnly placeholder={<DisplayPlaceholder/>}>
            <Display />
          </ClientOnly>
        </section>

        <section id="content" className="flex-1 flex flex-col gap-y-8 justify-center items-center p-4 lg:p-8 xl:p-10  w-full">
          <div className="text-sm md:text-lg lg:text-xl xl:text-2xl p-4 lg:p-8 xl:p-12">
            Hey there! Welcome to my little corner of the internet.
            I&apos;m Daksh, and this is my digital lounge: a mix of projects, recent learnings, and hidden surprises.
            Oh, and there&apos;s a funky playlist for you while you explore. 🎶 Have fun!
          </div>
        </section>
      </section>
    </>
  );
}
