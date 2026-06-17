"use client"
import { useState } from "react"

export default function ContactForm() {
    const [sending, setSending] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSending(true)
        // Aqui entraria lógica de envio (API, Email, WhatsApp, etc.)
        setTimeout(() => setSending(false), 2000)
    }

    return (
        <section id="contato" className="w-full py-20 px-4 md:px-8 bg-linear-to-b from-emerald-950/40 to-transparent backdrop-blur-[2px]">
            <div className="max-w-4xl mx-auto w-full">

                {/* Cabeçalho da Seção */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-300/10 px-3.5 py-1.5 rounded-full border border-orange-300/20 inline-block">
                        Atendimento Exclusivo
                    </span>
                    <h2 className="font-serif font-extralight text-4xl md:text-5xl text-white tracking-wide mt-4">
                        Ficou <span className="font-medium text-orange-300">Interessado?</span>
                    </h2>
                    <p className="text-gray-400 font-light text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
                        Preencha os campos abaixo para entrar em contato e encontrar imóveis que combinam com o seu estilo de vida.
                    </p>
                </div>

                {/* Form*/}
                <div className="bg-emerald-950/40 p-6 md:p-10 rounded-3xl border border-orange-200/10 shadow-2xl backdrop-blur-md">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Campo: Nome Completo */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Nome Completo</label>
                            <input
                                type="text"
                                required
                                placeholder="Ex: Gabriel Silva"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        {/* Campo: E-mail */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">E-mail Corporativo / Pessoal</label>
                            <input
                                type="email"
                                required
                                placeholder="Ex: gabriel@exemplo.com"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        {/* Campo: Telefone / WhatsApp */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">WhatsApp / Telefone</label>
                            <input
                                type="tel"
                                required
                                placeholder="Ex: (11) 99999-9999"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        {/* Campo: Intenção do Cliente */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Qual o seu objetivo?</label>
                            <select className="w-full p-3.5 bg-emerald-900/40 border border-orange-200/10 rounded-xl text-white outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all cursor-pointer text-sm appearance-none">
                                <option className="bg-emerald-950 text-white">Quero Comprar um Imóvel</option>
                                <option className="bg-emerald-950 text-white">Quero apenas Investir</option>
                            </select>
                        </div>

                        {/* Campo: Mensagem / Observações Adicionais */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Preferências ou Mensagem (Opcional)</label>
                            <textarea
                                rows={4}
                                placeholder="Conte-nos um pouco sobre o que você busca (bairros de preferência, número de quartos, etc...)"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm resize-none"
                            />
                        </div>

                        {/* Botão de Envio Centralizado */}
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full md:w-auto bg-orange-200 hover:bg-orange-300 disabled:bg-orange-200/50 text-emerald-950 font-bold px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest rounded-xl text-xs transform active:scale-[0.98] cursor-pointer"
                            >
                                {sending ? (
                                    <span>Enviando dados...</span>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
                                        </svg>
                                        Solicitar Contato
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}