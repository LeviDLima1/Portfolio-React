
import FazoL from "../assets/Faz-o-L.png"
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
export default function Header() {

    return (
      <>
      <header className="flex w-full justify-evenly items-center fixed pt-4">
        <div className="border-b rounded-full shadow-md hover:shadow-white hover:shadow-lg shadow-white transition-all cursor-pointer hover:scale-105 ">
            <img src={FazoL} alt="Faz o L" className="w-[100px] h-[100px] rounded-full"/>
        </div>
        <nav className=" h-20 w-[80%] flex items-center justify-center">
          <ul className="flex gap-10 text-center w-full justify-end h-10">
            <a href="./" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110">INICIO</a>
            <a href="#Sobre-Mim" onClick={()=> scrollToSection("Sobre-Mim")} className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110">SOBRE</a>
            <a href="./#Sobre-Mim" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110">PROJETOS</a>
            <a href="./#Sobre-Mim" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110">CONTATO</a>
          </ul>
        </nav>
      </header>
      </>
    )
  }