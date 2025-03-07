import React from "react";
import Image from "next/image";

const About = () => {
  return (
   <>
      <section className=" grid lg:flex bg-[rgb(81,95,109)] justify-center items-start md:items-center m-1 mt-20 md:w-1/2 lg:mt-0 lg:w-8/12 rounded-2xl shadow-xl">
        <section className="flex flex-col justify-start md:justify-start items-center h-full md:w-full  md:mt-0  mt-3  float-left">
          <Image
            className=" rounded-3xl  shadow-5xl float-left"
            src="/fotoAlan.png"
            width={200}
            height={200}
            alt="foto-alan"
            unoptimized
          />
          <h1 className="text-2xl m-5 font-serif">Alan Klysman</h1>
        </section>
        <p className="text-xl  lg:w-10/12 clean-right antialiased font-sans m-5 text-justify">
          Oi! Me chamo Alan e sou um desenvolvedor frontend apaixonado por
          transformar ideias em interfaces dinâmicas e intuitivas. Adoro criar
          experiências fluidas e bem estruturadas, sempre buscando escrever um
          código limpo e eficiente. Estou constantemente explorando novas
          tecnologias para aprimorar minhas habilidades e entregar soluções
          modernas. Para mim, programar vai além do código—é resolver problemas,
          inovar e construir experiências incríveis para os usuários.
        </p>
        
      </section>
      </>

  );
};

export default About;
