import Link from "next/link";
import NavBar from "./components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" bg-gradient-to-b  from-[#2C3E50] via-[#ECF0F1] via-[#E67E22] 
    to-[#1ABC9C] border border-8 border-[#2C3E50] ">
      <div className="">
        <NavBar />
        <section
          id="about"
          className="flex flex-col h-screen  text-white justify-center items-center "
        >
          <h1 className="text-2xl m-5">Alan Klysman</h1>
          <p className="text-xl m-5">Olá, me chamo Alan e sou um desenvolvedor</p>
        </section>
        <section
          id="blog"
          className=" flex flex-col gap-5 h-screen text-[#1981DD] justify-center items-center"
        >
          <h1 className="text-5xl mb-5">stack</h1>
          <button className="text-xl antialiased font-bold bg-teal-500  text-blue-950 w-1/2 rounded-lg border py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/html-5.png" 
          width={500} 
          height={500} 
          alt="html" />
          HTML 5
          </button>
          <button className="text-xl rounded-sm border font-bold bg-teal-500 w-1/2 text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/css-3.png" 
          width={500} 
          height={500} 
          alt="css" />
          CSS 3
          </button>
          <button className="text-xl rounded-sm border font-bold bg-teal-500 w-1/2 text-blue-950 py-3 px-10 border-green-600">Javascript</button>
          <button className="text-xl rounded-sm border font-bold bg-teal-500 w-1/2 text-blue-950 py-3 px-10 border-green-600">React Js</button>
          <button className="text-xl rounded-sm border font-bold bg-teal-500 w-1/2 text-blue-950 py-3 px-10 border-green-600">Next Js</button>
          <button className="text-xl rounded-sm border font-bold bg-teal-500 w-1/2 text-blue-950 py-3 px-10 border-green-600">Tailwind CSS</button>
        </section>
        <section
          id="projects"
          className="flex flex-col text-5xl sm:h-full h-screen text-[#1981DD] items-center mb-10 "
        >
          <h1 className="m-10">projects</h1>
          <section className="grid md:grid-cols-4 overflow-scroll gap-5 m-5 ">
            <Link href="https://google-mu-steel.vercel.app/">
              <Image src="/google.png" width={500} height={500} alt="google" />
            </Link>
            <Link href="https://snap-sable.vercel.app/">
              <Image src="/snap.png" width={500} height={500} alt="snap" />
            </Link>
            <Link href="https://pagina-de-login-taupe.vercel.app/">
              <Image src="/login.png" width={500} height={500} alt="login" />
            </Link>
            <Link href="https://calculator-nine-beige.vercel.app/">
              <Image
                src="/calculadora.png"
                width={500}
                height={500}
                alt="calculadora"
              />
            </Link>
          </section>
        </section>
        <section
          id="contact"
          className="flex flex-col gap-3 items-center text-2xl  h-screen text-violet-800 justify-center "
        >
          <h1>Contatos</h1>
          <p><span>Email:</span>alankdm77@gmail.com</p>
          <p><span>Telefone:</span>(86)99592-8239 </p>
          
          
        </section>
      </div>
    </main>
  );
}
