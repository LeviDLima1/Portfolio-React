import projetoHuddle from "../assets/Projeto-Huddle.png";
import projetoBulma from "../assets/Projeto-Bulma.png";
export default function TerSection() {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center gap-10 pt-20 pb-20
    
     max-md:px-4 max-md:pt-10 max-md:pb-10
     max-lg:px-4 max-lg:pt-20 max-lg:pb-20
    "
        id="Projeto"
      >
        <section className="w-full flex items-center justify-center">
          <div
            className="text-white w-1/2 text-center flex flex-col items-center justify-center gap-6
            
            max-md:w-full
            max-lg:w-full
            "
          >
            <h1
              className="text-5xl font-semibold text-[#FFF1E2] tracking-widest 
            max-md:text-4xl
            max-lg:text-4xl
            "
            >
              PROJETOS
            </h1>
            <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
            <p className="text-xl">
              Aqui você encontrará alguns dos projetos pessoais que criei, sendo
              que cada projeto contém seu próprio estudo de caso.
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-10">
          <div
            className="flex w-[60%] items-center justify-center gap-6
            
             max-md:w-full max-md:flex-col max-md:gap-4
             max-lg:w-full max-lg:flex-col max-lg:gap-4 
            "
          >
            <div
              className="flex w-1/2 items-center justify-center gap-6
                
                 max-md:w-full
                "
            >
              <a href="https://bulma-css-work.vercel.app" target="_blank">
                <img
                  src={projetoBulma}
                  alt="Bulma"
                  className="rounded-xl hover:scale-[103%] transition-all"
                />
              </a>
            </div>
            <div
              className="flex flex-col w-1/2 gap-6 text-[#FFF1E2]
                
                max-md:w-[90%] max-md:text-center max-md:gap-2
                "
            >
              <h1
                className="text-3xl font-semibold
                    max-md:text-2xl
                    "
              >
                Apresentação do Bulma
              </h1>
              <p className="max-md:text-justify max-lg:text-justify">
                Projeto focado no Bulma CSS, utilizando componentes prontos para
                criar uma interface moderna e responsiva de forma prática e
                rápida.
              </p>
              <a
                href="https://bulma-css-work.vercel.app"
                target="_blank"
                className="w-[25%] h-12 rounded-lg bg-[#af753f] font-bold tracking-wider flex items-center justify-center hover:scale-[105%] hover:bg-[#da9c62] transition-all text-white no-underline"
              >
                Visitar
              </a>
            </div>
          </div>

          <div
            className="flex w-[60%] items-center justify-center gap-6
            
             max-md:w-full  max-md:flex-col max-md:gap-4a
             max-lg:w-full max-lg:flex-col max-lg:gap-4
             "
          >
            <div
              className="flex w-1/2 items-center justify-center
                
                 max-md:w-full"
            >
              <a href="https://huggle.vercel.app" target="_blank">
                <img
                  src={projetoHuddle}
                  alt="Bulma"
                  className="rounded-xl hover:scale-[103%] transition-all"
                />
              </a>
            </div>
            <div
              className="flex flex-col w-1/2 gap-6 text-[#FFF1E2]
                
                max-md:w-[90%] max-md:text-center max-md:gap-2"
            >
              <h1
                className="text-3xl font-semibold
                    max-md:text-2xl"
              >
                Landing Page Huddle
              </h1>
              <p className="max-md:text-justify max-lg:text-justify">
                Desafio Huddle do Frontend Mentor: criação de uma landing page
                responsiva, com layout moderno e design focado na experiência do
                usuário.
              </p>
              <a
                href="https://huggle.vercel.app"
                target="_blank"
                className="w-[25%] h-12 rounded-lg bg-[#af753f] font-bold tracking-wider flex items-center justify-center hover:scale-[105%] hover:bg-[#da9c62] transition-all text-white no-underline"
              >
                Visitar
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
