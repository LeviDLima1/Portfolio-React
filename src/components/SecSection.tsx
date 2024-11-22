export default function SecSection() {
  return (
    <>
      <main
        className="bg-bg-section3 bg-no-repeat bg-cover flex flex-col items-center justify-center gap-20 max-md:gap-6 pt-20 pb-20
        
        max-md:pt-20 max-md max-md:px-4 max-md:pb-10
        max-lg:pt-20 max-lg:px-6
        "
        id="Sobre-Mim"
      >
        <section className="w-1/2 max-md:w-full max-lg:w-full">
          <div
            className="flex flex-col items-center justify-center text-center gap-6 text-white  
            
            max-md:gap-3
            "
          >
            <h1
              className="text-5xl font-semibold text-[#FFF1E2] tracking-widest
                
                max-md:text-4xl max-lg:text-4xl
                "
            >
              SOBRE MIM
            </h1>
            <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
            <p className="text-xl max-md:text-lg max-md:text-justify">
              Aqui você encontrará mais informações sobre mim, o que eu faço e
              minhas habilidades atuais, principalmente em termos de programação
              e tecnologia.
            </p>
          </div>
        </section>

        <section
          className="flex items-start justify-center gap-10
          
          max-md:flex-col max-md:gap-14
          max-lg:flex-col max-lg-gap-14
          "
        >
          <div
            className="flex flex-col w-1/3 gap-10 text-white
            
            max-md:w-full max-md:gap-4 max-md:text-justify
            max-lg:w-full max-lg:gap-4 max-lg:text-justify
            "
          >
            <h1
              className="text-5xl font-semibold text-[#FFF1E2]
              
              max-md:text-xl max-md:text-center
              max-lg:text-3xl max-lg:text-center
              "
            >
              CONHEÇA-ME
            </h1>
            <p className="text-xl text-[#FFF1E2] max-md:text-sm max-lg:text-lg">
              Sou um
              <strong>Desenvolvedor Web iniciante focado em Frontend</strong>,
              construindo projetos e aprimorando meu conhecimento na área.
              Confira alguns dos meus trabalhos na seção
              <strong>Projetos</strong>.
            </p>

            <p className="text-xl text-[#FFF1E2] max-md:text-sm max-lg:text-lg">
              Também gosto de compartilhar conteúdo relacionado ao que aprendi
              ao longo do tempo em <strong>Desenvolvimento Web</strong> para
              ajudar outras pessoas da Comunidade de Desenvolvedores. Sinta-se à
              vontade para me Seguir no meu{" "}
              <a
                href="https://www.instagram.com/yley_14/"
                target="_blank"
                className="underline text-[#ffb671] max-md:text-sm max-lg:text-lg"
              >
                Instagram
              </a>
            </p>

            <p className="text-xl text-[#FFF1E2] max-md:text-sm max-lg:text-lg">
              Estou aberto a oportunidades de <strong>Emprego</strong> onde
              posso contribuir, aprender e crescer. Se você tiver uma boa
              oportunidade que corresponda às minhas habilidades e experiência,
              não hesite em entrar em <strong>contato</strong> comigo.
            </p>
            <button
              type="button"
              className="w-[25%] h-12 rounded-lg bg-[#af753f] transition-all hover:scale-105 hover:bg-[#da9c62] font-bold tracking-wider
              
              max-md:text-sm
              "
            >
              CONTATO
            </button>
          </div>

          <div
            className="flex flex-col justify-items-start w-1/3 h-full gap-10 text-[#FFF1E2]
            
            max-md:w-full max-md:text-center max-md:gap-8
            max-lg:w-full max-lg:text-center max-lg:gap-8
            "
          >
            <h1 className="text-5xl font-semibold max-md:text-2xl max-lg:text-3xl">
              MINHAS HABILIDADES
            </h1>

            <div
              className="flex gap-4 flex-wrap
              
              max-md:items-center max-md:justify-center
              max-lg:items-center max-lg:justify-center
              "
            >
              <div className="border px-6 py-1 tracking-widest font-semibold">
                HTML
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                CSS
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                SASS / LESS
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                TailWind
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                BootStrap
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                Bulma CSS
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                JavaScript
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                React Vite
              </div>
              <div className="border px-6 py-1 tracking-widest font-semibold">
                GitHub
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
