export default function FirstSec() {
  return (
    <>
      <main
        className="  px-10 flex h-screen items-center justify-center
        
        max-md:flex-col-reverse max-lg:flex-col-reverse
        "
        id="Home"
      >
        <div className="pt-14">
          <div
            className="flex flex-col text-white gap-5
          max-md:flex-row max-lg:flex-row
          "
          >
            <div
              className="w-32 text-transparent flex items-center gap-3
            max-md:justify-center max-md:w-auto max-lg:justify-center 
            "
            >
              <span
                className="bg-[#ffb671] w-2 hover:w-6 transition-all h-2 flex rounded-full
              max-md:hidden max-lg:hidden 
              "
              ></span>
              <a
                href="https://www.instagram.com/yley_14/"
                target="_blank"
                className="text-white text-4xl font-semibold flex justify-center items-center"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
            <div
              className="w-32 text-transparent flex items-center gap-3
            max-md:justify-center max-md:w-auto max-lg:justify-center
            "
            >
              <span
                className="bg-[#ffb671] w-2 hover:w-6 transition-all h-2 flex rounded-full
              max-md:hidden max-lg:hidden
              "
              ></span>
              <a
                href="https://github.com/LeviDLima1"
                target="_blank"
                className="text-white text-4xl font-semibold flex justify-center items-center"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
            <div
              className="w-32 text-transparent flex items-center gap-3
            max-md:justify-center max-md:w-auto max-lg:justify-center
            "
            >
              <span
                className="bg-[#ffb671] w-2 hover:w-6 transition-all h-2 flex rounded-full
              max-md:hidden max-lg:hidden
              "
              ></span>
              <a
                href="https://www.linkedin.com/in/levi-duarte-lima-1b2337211/"
                target="_blank"
                className="text-white text-4xl font-semibold flex justify-center items-center"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <section
          className="w-full pr-24 flex items-center justify-center flex-col 
          
          max-md:pr-0 max-lg:pr-0 
          "
        >
          <div
            className="w-1/2 flex flex-col items-center justify-center text-[#FFF1E2] gap-8
            
            max-md:w-full  max-lg:w-full
            "
          >
            <h1
              className="text-6xl text-white font-bold
              max-md:text-xl max-lg:text-4xl text-center
              "
            >
              OLÁ, EU SOU LEVI DUARTE
            </h1>
            <p className="text-justify text-xl max-md:text-lg">
              Como um Desenvolvedor Web iniciante orientado a resultados, meu
              foco é não apenas na funcionalidade do site, mas também em como
              ele pode contribuir para o sucesso geral do produto.
            </p>
            <a
              href="#Projeto"
              className=" w-[25%] h-12 flex items-center justify-center rounded-lg bg-[#af753f] transition-all hover:scale-105 hover:bg-[#da9c62] font-bold tracking-wider text-white no-underline
              
              max-md:text-sm max-md: max-md:w-[40%]
              "
            >
              PROJETOS
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
