import React from 'react'
import Image from "next/image"

const Techs = () => {
  return (
    <>
            <h1 className="text-5xl mb-5 ">Tecnologias</h1>
            <section className="grid justify-center sm:grid-cols-3 h-full w-full md:w-full md:p-32 gap-5 sm:p-5">
              <button className="flex flex-col  justify-center items-center text-xl antialiased font-bold bg-teal-500  text-blue-950  w-full rounded-lg border py-3 px-10 border-green-600">
                <Image
                  className="py-2"
                  src="/icons8-html5-48.png"
                  width={50}
                  height={50}
                  alt="html"
                  unoptimized
                />
                HTML 5
              </button>
              <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500   w-full  text-blue-950 py-3 px-10 border-green-600">
                <Image
                  className="py-2"
                  src="/icons8-css-100.png"
                  width={50}
                  height={50}
                  alt="css"
                  unoptimized
                />
                CSS 3
              </button>
              <button className="flex flex-col  justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
                <Image
                  className="py-2"
                  src="/icons8-javascript-144.png"
                  width={50}
                  height={50}
                  alt="javascript"
                  unoptimized
                />
                Javascript
              </button>
              <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
                <Image
                  className=" "
                  src="/icons8-react-native-96.png"
                  width={50}
                  height={50}
                  alt="react"
                  unoptimized
                />
                React Js
              </button>
              <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
                <Image
                  className="py-2"
                  src="/icons8-nextjs-144.png"
                  width={50}
                  height={50}
                  alt="nextjs"
                  unoptimized
                />
                Next Js
              </button>
              <button className="flex flex-col justify-center items-center text-xl rounded-sm border font-bold bg-teal-500 w-full text-blue-950 py-3 px-10 border-green-600">
                <Image
                  className="py-2 bg-teal-800"
                  src="/icons8-tailwind-css-100.png"
                  width={50}
                  height={50}
                  alt="tailwindCSS"
                  unoptimized
                />
                Tailwind CSS
              </button>
            </section>
           
          </>
  )
}

export default Techs
