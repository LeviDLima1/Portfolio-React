import FazoL from "../assets/Faz-o-L.png"
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <header className="flex w-full justify-evenly max-md:justify-between max-md:px-6 items-center absolute pt-4 max-md:pt-0
      
      ">
        <div className="border-b rounded-full shadow-md hover:shadow-white hover:shadow-lg shadow-white transition-all cursor-pointer hover:scale-105">
            <img src={FazoL} alt="Faz o L" className="w-[100px] h-[100px] max-md:w-[56px] max-md:h-[56px] rounded-full"/>
        </div>

        <button onClick={handleShow} className=" w-[25%] h-12 flex items-center justify-center rounded-lg bg-[#af753f] transition-all hover:scale-105 hover:bg-[#da9c62] font-bold tracking-wider text-white md:hidden">
        Launch
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton closeVariant='white'>
            <Offcanvas.Title>
              <div className=""></div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="flex flex-col gap-4">
              <a href="#Home" className="text-white font-semibold text-xl
              hover:border-b-2 cursor-pointer transition hover:scale-110
              no-underline
              "
              >INICIO</a>
              
              <a href="#Sobre-Mim" className="text-white font-semibold text-xl
              hover:border-b-2 cursor-pointer transition hover:scale-110
              no-underline
              "
              >SOBRE</a>
              
              <a href="./#Projeto" className="text-white font-semibold text-xl
              hover:border-b-2 cursor-pointer transition hover:scale-110
              no-underline
              ">PROJETOS</a>
              
              <a href="./#Contato" className="text-white font-semibold text-xl
              hover:border-b-2 cursor-pointer transition hover:scale-110
              no-underline
              ">CONTATO</a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        
        
        <nav className=" h-20 w-[80%] flex items-center justify-center
        max-md:hidden
        ">
          <ul className="flex gap-10 text-center w-full justify-end h-10
          
          ">

            <a href="#Home" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            ">INICIO</a>
            
            <a href="#Sobre-Mim" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            ">SOBRE</a>
            
            <a href="./#Projeto" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            ">PROJETOS</a>
            
            <a href="./#Contato" className="text-white w-[10%] flex items-center justify-center font-semibold text-xl
            hover:border-b-2 cursor-pointer transition hover:scale-110
            no-underline
            ">CONTATO</a>
          </ul>
          
        </nav>
      </header>


      
      </>
    )
  }


  