export default function SecSection() {

    return (
      <>
        <main className="bg-bg-section2 bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center gap-20"
        id="Sobre-Mim">
          <section className="w-1/2">
            <div className="flex flex-col items-center justify-center text-center gap-6 text-white  ">
                <h1 className="text-5xl font-semibold text-[#FFF1E2]">SOBRE MIM</h1>
                <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
                <p className="text-xl">Aqui você encontrará mais informações sobre mim, o que eu faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia.</p>
            </div>
          </section>

          <section className="flex items-center justify-center gap-10">
            <div className="flex flex-col w-1/3 gap-10 text-white">
              <h1 className="text-5xl font-semibold text-[#FFF1E2]">CONHEÇA-ME</h1>
              <p className="text-xl text-[#FFF1E2]">
                Sou um <strong>Desenvolvedor Web iniciante focado em Frontend</strong>, construindo projetos e aprimorando meu conhecimento na área. Confira alguns dos meus trabalhos na seção <strong>Projetos</strong>.
              </p>

              <p className="text-xl text-[#FFF1E2]">Também gosto de compartilhar conteúdo relacionado ao que aprendi ao longo do tempo em <strong>Desenvolvimento Web</strong> para ajudar outras pessoas da Comunidade de Desenvolvedores. Sinta-se à vontade para me Seguir no meu <a href="" className="underline text-[#ffb671]">Instagram</a>
              </p>
              
              <p className="text-xl text-[#FFF1E2]">
              Estou aberto a oportunidades de <strong>Emprego</strong> onde posso contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em <strong>contato</strong> comigo.
              </p>
              <button type="button" className=" w-[25%] h-12 rounded-lg bg-[#af753f] font-bold tracking-wider">CONTATO</button>
            </div>

            <div className="flex flex-col justify-items-start w-1/3 h-full gap-10 text-[#FFF1E2]">
              <h1 className="text-5xl font-semibold">MINHAS HABILIDADES</h1>
              
              <div className="flex gap-4 flex-wrap">
                <div className="border px-6 py-1 tracking-widest font-semibold">HTML</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">CSS</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">SASS / LESS</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">TailWind</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">BootStrap</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">Bulma CSS</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">JavaScript</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">React Vite</div>
                <div className="border px-6 py-1 tracking-widest font-semibold">GitHub</div>
              </div>
              
            </div>
          </section>
        </main>
      </>
    )
  }