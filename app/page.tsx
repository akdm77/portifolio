import Link from "next/link";
import NavBar from "./components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" bg-gradient-to-b  from-[#2C3E50] via-[#ECF0F1] via-[#E67E22] 
    to-[#1ABC9C]  border-8 border-[#2C3E50] ">
      <div className="">
        <NavBar />
        <section
          id="about"
          className="flex flex-col h-screen text-white justify-center items-center "
        >
          <h1 className="text-5xl m-5">Alan Klysman</h1>
          <p className="text-xl m-5">Oi! Me chamo Alan e sou um desenvolvedor frontend apaixonado por transformar ideias em interfaces dinâmicas e intuitivas. Adoro criar experiências fluidas e bem estruturadas, sempre buscando escrever um código limpo e eficiente. Estou constantemente explorando novas tecnologias para aprimorar minhas habilidades e entregar soluções modernas. Para mim, programar vai além do código—é resolver problemas, inovar e construir experiências incríveis para os usuários.</p>
        </section>
        <hr className=" m-16 border-black" />
        <section
          id="techs"
          className=" flex flex-col  h-full w-full text-[#404041] justify-center items-center"
        >
          <h1 className="text-5xl mb-5 ">Tecnologias</h1>
          <section className="grid justify-center sm:grid-cols-3 h-full w-full md:w-screen md:p-32 gap-5 sm:p-5">

          <button className="flex flex-col  justify-center items-center text-xl antialiased font-bold bg-teal-500  text-blue-950  w-full rounded-lg border py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/icons8-html5-48.png" 
          width={50} 
          height={50} 
          alt="html" 
          unoptimized/>
          HTML 5
          </button>
          <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500   w-full  text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/icons8-css-100.png" 
          width={50} 
          height={50} 
          alt="css" 
          unoptimized/>
          CSS 3
          </button>
          <button className="flex flex-col  justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/icons8-javascript-144.png" 
          width={50} 
          height={50} 
          alt="javascript" 
          unoptimized/>
          Javascript
          </button>
          <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className=" "
          src="/icons8-react-native-96.png" 
          width={50} 
          height={50} 
          alt="react" 
          unoptimized/>
          React Js
          </button>
          <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className="py-2"
          src="/icons8-nextjs-144.png" 
          width={50} 
          height={50} 
          alt="nextjs" 
          unoptimized/>
          Next Js
          </button>
          <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
          <Image 
          className="py-2 bg-teal-800"
          src="/icons8-tailwind-css-100.png" 
          width={50} 
          height={50} 
          alt="tailwindCSS" 
          unoptimized/>
          Tailwind CSS
          </button>
          </section>
        </section>
        <hr className=" m-16 border-black"/>
        <section
          id="projects"
          className="flex flex-col  text-2xl sm:h-full h-screen text-[#1981DD] items-center mb-10 "
        >
          <h2 className="m-10">projects</h2>
          <section className="flex flex-col md:grid md:grid-cols-2 overflow-scroll gap-5 m-5 ">
            <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">

            <h3 className="m-3">pagina do Google</h3>
            <Link href="https://google-mu-steel.vercel.app/" className="">
              <Image src="/google.png" width={500} height={500} alt="google" />
            </Link>
            </section>
            <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">
            <h3 className="m-3">Pagina de snap</h3>
            <Link href="https://snap-sable.vercel.app/">
              <Image src="/snap.png" width={500} height={500} alt="snap" />
            </Link>
            </section>
            <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">
              <h3 className="m-3">Pagina de Login</h3>
            <Link href="https://pagina-de-login-taupe.vercel.app/">
              <Image src="/login.png" width={500} height={500} alt="login" />
            </Link>
            </section>
            <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">
              <h3 className="m-3">Calculadora</h3>
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
        </section>
        <hr className=" m-16 border-black"/>
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
