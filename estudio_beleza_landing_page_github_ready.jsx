export default function BeautyStudioPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-400 to-rose-500 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Studio Glamour Beauty
            </h1>
            <p className="text-lg mb-8 text-pink-100">
              Realçando sua beleza com sofisticação, cuidado e atendimento personalizado.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#servicos"
                className="bg-white text-rose-500 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Ver Serviços
              </a>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-rose-500 transition"
              >
                Agendar Horário
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
              alt="Estúdio de beleza"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-rose-500">Sobre Nós</h2>
          <p className="text-lg leading-8 text-gray-600">
            Nosso estúdio oferece serviços premium de beleza, estética e cuidados pessoais.
            Trabalhamos com produtos de alta qualidade e profissionais especializados para entregar uma experiência única.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-6 bg-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-500 mb-14">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cabelo",
                desc: "Cortes, coloração, hidratação e tratamentos capilares.",
              },
              {
                title: "Manicure & Pedicure",
                desc: "Unhas impecáveis com acabamento profissional.",
              },
              {
                title: "Maquiagem",
                desc: "Produção para eventos, festas e ocasiões especiais.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-rose-500">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-500 mb-14">
            Galeria
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Galeria"
                className="rounded-3xl shadow-lg h-80 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6 bg-pink-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-rose-500 mb-14">
            O que nossas clientes dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Atendimento maravilhoso e ambiente impecável!",
              "Minha maquiagem ficou perfeita para o casamento.",
              "Melhor salão da região, super recomendo.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <p className="text-gray-600 italic">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-6 bg-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Agende Seu Horário</h2>
          <p className="text-lg text-rose-100 mb-10">
            Entre em contato agora mesmo e transforme sua autoestima.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="bg-white text-rose-500 px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-rose-500 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-600 text-center text-white py-6">
        <p>© 2026 Studio Glamour Beauty — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
