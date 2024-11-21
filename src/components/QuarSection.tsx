import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5585992537607"; // Substitua pelo seu número com código do país e DDD
    const message =
      `*Nova Mensagem de Contato:*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Mensagem:*\n${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  return (
    <main
      className="bg-gray-950 flex flex-col items-center justify-center bg-bg-section2 bg-cover bg-no-repeat gap-10
        
    md:h-screen max-md:px-4 max-md:pt-10
    "
    >
      <section className="w-full flex items-center justify-center">
        <div
          className="text-white w-1/2 text-center flex flex-col items-center justify-center gap-6
                    
                    max-md:w-full
                    "
        >
          <h1
            className="text-5xl font-semibold text-[#FFF1E2] tracking-widest
                        max-md:text-4xl
                        "
          >
            CONTATO
          </h1>
          <div className="flex border-2 border-[#ffb671] rounded-full w-10"></div>
          <p className="text-xl max-md:text-justify max-md:text-lg">
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo e eu retornarei o mais breve possível.
          </p>
        </div>
      </section>

      <section
        className="w-1/2 flex items-center justify-center
                
        max-md:w-full"
      >
        <form
          onSubmit={handleSubmit}
          className="w-1/2 flex flex-col items-center justify-center gap-10 p-8 text-white
                        
                        max-md:w-full"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="w-full text-lg font-semibold pl-3 text-white"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 rounded-xl p-3 transition-all font-semibold text-gray-800"
              placeholder="Escreva Aqui Seu Nome"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="w-full text-lg font-semibold pl-3 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 rounded-xl p-3 transition-all font-semibold text-gray-800"
              placeholder="Escreva Aqui Seu E-mail"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="message"
              className="w-full text-lg font-semibold pl-3 text-white"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-44 rounded-xl p-3 transition-all font-semibold text-gray-800"
              placeholder="Escreva Aqui Sua Mensagem"
            />
          </div>
          <button
            type="submit"
            className="w-[70%] p-2 h-12 rounded-lg bg-[#af753f] transition-all hover:scale-105 hover:bg-[#da9c62] font-bold tracking-wider"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactForm;
