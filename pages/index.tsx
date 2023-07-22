import Header from "@/components/common/Header";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Home from "@/components/ui/Home";
import LeftSidebar from "@/components/ui/LeftSidebar";
import Project from "@/components/ui/Project";
import RightSidebar from "@/components/ui/RightSidebar";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  return (
    <>
      <Head>
        <title>Muhammad Usman</title>
        <meta property="og:title" content="Muhammad Usman" key="title" />
      </Head>

      {!isLoading && <>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className={`max-w-6xl w-[80%] mx-auto`}>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
      </>
      }
        
      {/*    Page Load Animation    */}
      <div className={`${isLoading ? 'bg-black/40 backdrop-blur-lg' : 'bg-transparent -translate-y-full backdrop-blur-0'} transform transition-all duration-700  ease-in-out backdrop-filter fixed top-0 left-0 h-full w-full flex justify-center items-center z-50`}>
        <div className="flex flex-col items-center w-max ">
          <div className="min-h-[55px] w-full overflow-hidden">
            <h1 className="heading text-center text-5xl font-bold text-LightestSlate transform translate-y-full mt-2">Muhammad Usman</h1>
          </div>
          <div className="loading-bar h-0.5 bg-LightestSlate rounded-md my-1"></div>
          <div className="min-h-[30px] w-full overflow-hidden">
            <p className="sub-heading text-center text-xl uppercase font-smeibold transform -translate-y-full text-primary">Front end Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  )
}
