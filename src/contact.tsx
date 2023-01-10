import React, {useState} from "react";

const FORM_ENDPOINT = "";

const ContactForm = () => {
    const [enviado, setEnviado] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setEnviado(true);
        }, 100); 
    };

    if(enviado) {
        return (
            <>
                <div className="text-2xl">Obrigado!</div>
                <div className="text-md">Entraremos em contato em breve.</div>
            </>
        );
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            
        <div className="mb-3 pt-0">
            <h3 className="text-center text-gray-400 text-s">Contate-nos</h3>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
            <div className="mb-3 pt-0">
                <input type="text" 
                       placeholder="Seu nome aqui.." 
                       name="Nome"
                       className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required 
                />
            </div>
            <div className="mb-3 pt-0">
                <input type="email" 
                       placeholder="Seu E-mail aqui.." 
                       name="E-mail"
                       className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required 
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea 
                       placeholder="Digite a sua mensagem.." 
                       name="mensagem"
                       className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required 
                />
            </div>
            <div className="mb-3 pt-0">
                <button 
                       className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                >
                    Enviar Mensagem.
                </button>
            </div>
        </form>
    </div>
    );
};


export default ContactForm;