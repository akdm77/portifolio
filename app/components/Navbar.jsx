"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menuClose from "/public/icon-close-menu.svg";
import menu from "/public/icon-menu.svg";

const Navbar = () => {
  const [ativo, setAtivo] = useState(false);
  const OpenPagesAndClosePages = () => {
    if(ativo == true){
      setAtivo(false)
    }
  }
  return (
    <nav className="flex  fixed top-0 left-0 right-0 z-0 h-auto  bg-[#2C3E50] items-center  text-white justify-end md:h-20 lg:h-20">

      <Link href="/">
        <Image
          src="/AKDM logo with the name larger and in white color.png"
          height={100}
          width={100}
          alt="AKDM"
          className="fixed left-5 top-7 size-16 border rounded-full lg:top-2 sm:top-1"
          unoptimized
        />
      </Link>
      <div className=" px-4 mx-auto lg:max-w-7xl  md:flex md:px-8 "></div>

      <div
        className={`flex justify-self-center   pb-3 md:block md:pb-0 md:mt-0 ${ativo
            ? " relative  left-4 top-24 min-w-full  md:p-8 text-center  bg-gradient-to-b from-[#2C3E50] via-[#ECF0F1] via-[#E67E22] to-[#1ABC9C] "
            : "hidden"
          }`}
      >
        <ul
          className=" h-screen  md:fixed md:right-6 md:top-0 md:h-auto md:flex  md:justify-end  md:pt-3.5 md:items-start 
          flex-grow items-center justify-center w-2/3  text-center "
           
        >
          <Link href="#about" className="w-28" onClick={OpenPagesAndClosePages}>
            <li className="pb-6 text-xl  text-white py-2 md:px-6 text-center items-center w-full justify-center 
            border-b-2 md:border-b-0  hover:bg-purple-600">
              about
            </li>
          </Link>
          <Link href="#techs" onClick={OpenPagesAndClosePages}>
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center items-center justify-center border-b-2 
            md:border-b-0 hover:bg-purple-600">
              Tecnologias
            </li>
          </Link>
          <Link href="#projects" onClick={OpenPagesAndClosePages}>
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 items-center justify-center 
            md:border-b-0 hover:bg-purple-600">
              projects
            </li>
          </Link>
          <Link href="#contact" onClick={OpenPagesAndClosePages}>
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 items-center justify-center 
            md:border-b-0 hover:bg-purple-600">
              contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden  ">
        <button className="p-2 flex" onClick={() => setAtivo(!ativo)}>
          {ativo ? (
            <Image
              src={menuClose}
              className="focus:border-none fixed right-3 top-2 active:border-none  my-6 mx-3 border border-white p-2 
              size-14 rounded-full bg-slate-300"
              height={30}
              width={30}
              alt="menu-close"
            />
          ) : (
            <Image
              src={menu}
              className="  my-6 mx-3 border  border-white p-2 size-14 rounded-full bg-slate-300"
              height={50}
              width={50}
              alt="menu"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
   