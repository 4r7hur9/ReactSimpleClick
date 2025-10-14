import { useState } from "react";
import Footer from "../components/Footer";

export default function InicioPage() {
  const [state, setState] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative w-full flex items-center justify-center">
        <section className="w-full">
              <div className="max-w-screen-xl mx-auto gap-12 text-gray-600 overflow-hidden flex flex-col justify-center items-center min-h-[580px] md:px-8 md:flex md:flex-row md:items-center lg:max-w-4xl lg:w-full lg:justify-start lg:items-center">
            <div className="flex-none space-y-6 mx-10 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150  whitespace-nowrap"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-gray-800  hover:bg-gray-700  text-white">
                  10% OFF
                </span>
                <p className="flex text-gray-800 items-center">
                  Na sua primeira compra
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Seja Bem-vindo ao Simple Click.
              </h1>
              <p>
                Simples para quem vende, fácil para quem compra. Venda qualquer produto fisico ou digital de forma rápida e segura. Desde comidas à roupas, tudo em um só lugar.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex whitespace-nowrap"
                >
                  Ver Catálogo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex whitespace-nowrap"
                >
                  Criar Conta
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>

  );
}
