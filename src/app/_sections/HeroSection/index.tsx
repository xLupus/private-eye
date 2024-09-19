export const HeroSection = () => {
    return (
        <section className="
            flex items-center justify-center w-full h-screen
            bg-hero-section bg-center bg-no-repeat bg-cover
        ">
            <div className="flex flex-col items-center max-w-7xl gap-8 p-3 text-gray-100
            ">
                <span className="block text-2xl font-bold text-center">
                    Descubra a verdade, proteja seus interesses.
                </span>

                <span className="block text-base text-center">
                    Com expertise e confidencialidade, solucionamos seus mistérios e garantimos a segurança das suas informações. Confie na nossa experiência para revelar o que está oculto e trazer clareza às situações mais complexas.
                </span>

                <button type="button" className="bg-blue-600 w-fit py-2.5 px-9 rounded-lg">
                    Solicite um orçamento
                </button>
            </div>
        </section>
    );
};