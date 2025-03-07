import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <>
            <h2 className="m-10 text-5xl">projects</h2>
            <section className="flex flex-col md:grid md:grid-cols-2 overflow-scroll gap-5 m-5 ">
              <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">
                <h3 className="m-3">pagina do Google</h3>
                <Link href="https://google-mu-steel.vercel.app/" className="">
                  <Image
                    src="/google.png"
                    width={500}
                    height={500}
                    alt="google"
                  />
                </Link>
              </section>
              <section className="bg-gray-600 text-white text-center rounded-md h-full w-full p-5">
                <h3 className="m-3">Pagina de snap</h3>
                <Link href="https://snap-sable.vercel.app/">
                  <Image
                    src="/snap.png"
                    width={500}
                    height={500}
                    alt="snap"
                  />
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
            
          </>
  )
}

export default Projects
