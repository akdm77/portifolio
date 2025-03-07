import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Contatos = () => {
  return (
    <footer
            id="contact"
            className="flex flex-col gap-3 items-center text-2xl  h-screen text-violet-800 justify-center ">
            <h1 className="text-5xl">Contatos</h1>
            <section className="flex gap-3">
              `
              <Link href="https://www.instagram.com/klysmalan?igsh=MTk2Y3VwZG1qY2VmYw==">
                <Image
                  src="/instagram.png"
                  width={50}
                  height={50}
                  alt="instagram"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/alan-klysman-8a567a23a/">
                <Image
                  src="/linkedin.png"
                  width={50}
                  height={50}
                  alt="linkedin"
                />
              </Link>
              <Link href="https://wa.me/5586995928239?text=Bom%20dia">
                <Image
                  src="/whatsapp.png"
                  width={50}
                  height={50}
                  alt="whatsapp"
                />
              </Link>
              <Link href="mailto:alankdm77@gmail.com?subject=Solicitação%20de%20Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20seus%20serviços.">
                <Image src="/o-email.png" width={50} height={50} alt="email" />
              </Link>
              <Link href="https://github.com/akdm77">
                <Image src="/github.png" width={50} height={50} alt="github" />
              </Link>
            </section>
            <p>
              <span>Email:</span>alankdm77@gmail.com
            </p>
            <p>
              <span>Telefone:</span>(86)99592-8239{" "}
            </p>
          </footer>
  )
}

export default Contatos
