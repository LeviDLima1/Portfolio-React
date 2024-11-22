import FazoL from "../assets/Faz-o-L.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <header
        className="flex w-full justify-evenly max-md:justify-between max-md:px-6 items-center absolute pt-4 max-md:pt-0
      
      "
      >
        <div className="border-b rounded-full shadow-md hover:shadow-white hover:shadow-lg shadow-white transition-all cursor-pointer hover:scale-105">
          <img
            src={FazoL}
            alt="Faz o L"
            className="w-[100px] h-[100px] max-md:w-[56px] max-md:h-[56px] rounded-full
            
            max-lg:w-[72px] max-lg:h-[72px]
            "
          />
        </div>

        <nav
          className=" h-20 w-[80%] flex items-center justify-center
        max-md:hidden
        "
        >
          <ul
            className="flex gap-10 text-center w-full justify-end h-10
            max-lg:gap-16
          "
          >
            <a
              href="#Home"
              className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            "
            >
              INICIO
            </a>

            <a
              href="#Sobre-Mim"
              className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            "
            >
              SOBRE
            </a>

            <a
              href="./#Projeto"
              className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            "
            >
              PROJETOS
            </a>

            <a
              href="./#Contato"
              className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            "
            >
              CONTATO
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
