"use client"
import { useState } from "react"

export default function ContactForm() {
    const [sending, setSending] = useState(false)
    const [telefone, setTelefone] = useState("")

    // formatar o telefone
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ""); 
        if (value.length > 11) value = value.slice(0, 11); 

        // Aplica a máscara baseada na quantidade de dígitos
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, "($1");
        }

        setTelefone(value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSending(true)


        // Captura todos os campos 
        const formData = new FormData(e.currentTarget);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const objetivo = formData.get('objetivo');
        const mensagemOpcional = formData.get('mensagem') || 'Nenhuma observação adicional.';


        const textoWhatsApp = `*NOVO CONTATO VIA SITE (GERAL)*\n\n` +
            `*Nome:* ${nome}\n` +
            `*E-mail:* ${email}\n` +
            `*Telefone:* ${telefone}\n` +
            `*Objetivo:* ${objetivo}\n\n` +
            `*Mensagem / Preferências:*\n${mensagemOpcional}`;

        const telefoneValdo = "5585989025026";
        const url = `https://wa.me/${telefoneValdo}?text=${encodeURIComponent(textoWhatsApp)}`;

        setTimeout(() => {
            window.open(url, "_blank");
            setSending(false);
            setTelefone("");
            (e.target as HTMLFormElement).reset(); 
        }, 800);
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

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Nome Completo</label>
                            <input
                                type="text"
                                name="nome"  
                                required
                                placeholder="Ex: Valdo Ferreira"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Ex: valdo@exemplo.com"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">WhatsApp / Telefone</label>
                            <input
                                type="text"
                                name="telefone"
                                required
                                value={telefone}
                                onChange={handlePhoneChange}
                                placeholder="Ex: (85) 99999-9999"
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Qual o seu objetivo?</label>
                            <select
                                name="objetivo"
                                className="w-full p-3.5 bg-emerald-900/40 border border-orange-200/10 rounded-xl text-white outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all cursor-pointer text-sm appearance-none"
                            >
                                <option className="bg-emerald-950 text-white">Quero Comprar um Imóvel</option>
                                <option className="bg-emerald-950 text-white">Quero apenas Investir</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-xs font-bold text-orange-200/70 uppercase tracking-wider">Mensagem ou Preferências (Opcional)</label>
                            <textarea
                                name="mensagem"
                                rows={4}
                                placeholder="Conte-nos um pouco sobre a região ou tipo de imóvel que você procura..."
                                className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all text-sm resize-none"
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-[#25D366] hover:bg-[#1DA851] disabled:bg-emerald-900 text-white font-bold px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest rounded-xl text-xs transform active:scale-[0.98] cursor-pointer shadow-lg shadow-[#25D366]/20"
                            >
                                {sending ? 'Preparando mensagem...' : 'Enviar Contato via WhatsApp'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}