import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import DotPattern from "@/components/ui/dot-pattern-1";
import PyconLogo from "@/public/pycon.svg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
          <div className="relative flex flex-col items-center border border-red-500">
            <DotPattern width={5} height={5} />

            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white" />

            <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] p-6 md:p-10 xl:py-20">
            <div className="flex items-center space-x-4 md:text-2xl text-xl text-red-500 font-semibold">
                <Image className="h-8 w-8 -mr-2" src={PyconLogo} alt={''} />
                <span>Python Conference Malaysia (PyCon MY)</span>
              </div>
              <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <h1 className="font-thin">"Get ready this</h1>
                  <p className="font-semibold">September</p>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">for</p>
                  <h1 className="font-semibold">PyCon MY 2025.</h1>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">It's going to be</p>
                  <h1 className="font-semibold">lit</h1>
                  <p className="font-thin">and</p>
                </div>
                <h1 className="font-semibold">wow!"</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}