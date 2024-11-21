export default function QuarSection() {

    return (
        <>
        <main className="bg-gray-950 flex flex-col items-center justify-center bg-bg-section2 bg-cover bg-no-repeat gap-10
        
        md:h-screen max-md:px-4 max-md:pt-10
        "
        id="Contato">
            <section className="w-full flex items-center justify-center">
                <div className="text-white w-1/2 text-center flex flex-col items-center justify-center gap-6
                
                max-md:w-full
                ">
                    <h1 className="text-5xl font-semibold text-[#FFF1E2] tracking-widest
                    max-md:text-4xl
                    ">CONTATO</h1>
                    <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
                    <p className="text-xl max-md:text-justify max-md:text-lg">Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e eu retornarei o mais breve possível.</p>
                </div>
            </section>

            <section className="w-1/2 flex items-center justify-center
            
            max-md:w-full
            ">
                <div className="w-1/2 flex flex-col items-center justify-center gap-10 p-8 text-white
                
                max-md:w-full
                ">

                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="" className="w-full text-lg font-semibold pl-3">Nome</label>
                        <input type="text" placeholder="Escreva Seu Nome" className="w-full h-12 rounded-xl p-3 transition-all font-semibold text-gray-800"/>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="" className="w-full text-lg font-semibold pl-3">E-mail</label>
                        <input type="email" placeholder="Escreva Seu E-mail" className="w-full h-12 rounded-xl p-3 transition-all font-semibold text-gray-800"/>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="" className="w-full text-lg font-semibold pl-3">Mensagem</label>
                        <textarea cols={30} rows={10} name="mensagem" id="mensagem" placeholder="Escreva Aqui Sua Mensagem" className="w-full h-44 rounded-xl p-3 transition-all font-semibold text-gray-800"></textarea>
                    </div>

                    <div className="w-full flex justify-end">
                        <button type="submit" className=" w-[25%] h-12 rounded-lg bg-[#af753f] transition-all hover:scale-105 hover:bg-[#da9c62] font-bold tracking-wider">Enviar</button>
                    </div>
                </div>
            </section>
        </main>
        
        
        </>
    )
}