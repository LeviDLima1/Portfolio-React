import projetoHuddle from "../assets/Projeto-Huddle.png"
import projetoBulma from "../assets/Projeto-Bulma.png"
export default function TerSection() {

    return (
    <>
    <main className="h-screen bg-gray-950 flex flex-col items-center justify-center bg-bg-section3 bg-cover bg-no-repeat gap-10"
    id="Projeto">
        <section className="w-full flex items-center justify-center">
            <div className="text-white w-1/2 text-center flex flex-col items-center justify-center gap-6">
                <h1 className="text-5xl font-semibold text-[#FFF1E2] tracking-widest">PROJETOS</h1>
                <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
                <p className="text-xl">Aqui você encontrará alguns dos projetos pessoais que criei, sendo que cada projeto contém seu próprio estudo de caso.</p>
            </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-10">
            <div className="flex w-1/2 items-center justify-center">
                <div className="flex w-1/2 items-center justify-center"><a href="https://bulma-css-work.vercel.app" target="_blank"><img src={projetoBulma} alt="Bulma" className="rounded-xl hover:scale-[103%] transition-all"/></a></div>
                <div className="flex flex-col w-1/2 gap-6 text-[#FFF1E2]">
                    <h1 className="text-3xl font-semibold">Apresentação do Bulma</h1>
                    <p>Projeto focado no Bulma CSS, utilizando componentes prontos para criar uma interface moderna e responsiva de forma prática e rápida.</p>
                    <a href="https://bulma-css-work.vercel.app" target="_blank" className="w-[25%] h-12 rounded-lg bg-[#af753f] font-bold tracking-wider flex items-center justify-center hover:scale-[105%] hover:bg-[#da9c62] transition-all">Visitar</a>
                </div>
            </div>

            <div className="flex w-1/2 items-center justify-center">
                <div className="flex w-1/2 items-center justify-center"><a href="https://huggle.vercel.app" target="_blank"><img src={projetoHuddle} alt="Bulma" className="rounded-xl hover:scale-[103%] transition-all"/></a></div>
                <div className="flex flex-col w-1/2 gap-6 text-[#FFF1E2]">
                    <h1 className="text-3xl font-semibold">Landing Page Huddle</h1>
                    <p>Desafio Huddle do Frontend Mentor: criação de uma landing page responsiva, com layout moderno e design focado na experiência do usuário.</p>
                    <a href="https://huggle.vercel.app" target="_blank" className="w-[25%] h-12 rounded-lg bg-[#af753f] font-bold tracking-wider flex items-center justify-center hover:scale-[105%] hover:bg-[#da9c62] transition-all">Visitar</a>
                </div>
            </div>
        </section>
    </main>
    </>
    )
}