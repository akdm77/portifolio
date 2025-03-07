import Link from "next/link";
import NavBar from "./components/Navbar";
import Image from "next/image";
import About from "./Pages/About";
import Techs from "./Pages/Techs";
import Projects from "./Pages/Projects";
import Contatos from "./Pages/Contatos";
export default function Home() {
  return (
    <main
      className=" bg-gradient-to-b  from-[#2C3E50] via-[#ECF0F1] via-[#E67E22] 
    to-[#1ABC9C]  border-8 border-[#2C3E50] ">
      <>
        <NavBar />
        <section
          id="about"
          className="flex  md:flex-row h-full md:h-screen md:items-center text-white mt-10 lg:mt-0 m-1 justify-center items-start ">
          <About />
        </section>
        <hr className=" m-16 border-black" />
        <section
          id="techs"
          className=" flex flex-col  h-screen w-full text-[#404041] justify-center items-center">
          <Techs />
        </section>
        <hr className=" m-16 border-black" />
        <section
          id="projects"
          className="flex flex-col  text-2xl sm:h-full h-screen text-[#1981DD] items-center mb-10 ">
          <Projects />
        </section>
        <hr className=" m-16 border-black" />
        <footer
          id="contact"
          className="flex flex-col gap-3 items-center text-2xl  h-screen text-violet-800 justify-center ">
          <Contatos />
        </footer>
      </>
    </main>
  );
}
