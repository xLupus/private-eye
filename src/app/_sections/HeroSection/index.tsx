"use client";
import { motion } from "framer-motion";

export const HeroSection = () => {
    const scrollToIdElement = (element_id: string) => {
        const element = document.getElementById(element_id);

        if(element)
            window.scrollTo({ behavior: "smooth", top: element.offsetTop});
    };

    return (
        <section className="
            flex items-center justify-center w-full h-4/5
            bg-hero-section bg-center bg-no-repeat bg-cover
        ">
            <motion.div
                className="flex flex-col items-center max-w-7xl gap-8 p-3 text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}

            >
                <span className="block text-2xl font-bold text-center">
                    Descubra a verdade, proteja seus interesses.
                </span>

                <span className="block text-base text-center">
                    Com expertise e confidencialidade, solucionamos seus mistérios e garantimos a segurança das suas informações. Confie na nossa experiência para revelar o que está oculto e trazer clareza às situações mais complexas.
                </span>

                <button
                    className="bg-blue-700 hover:bg-blue-600  w-fit py-2.5 px-9 rounded-lg"
                    onClick={() => scrollToIdElement('Contact')}
                >
                    Solicite um orçamento
                </button>
            </motion.div>
        </section>
    );
};