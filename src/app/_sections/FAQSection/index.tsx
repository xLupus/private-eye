import faq from "@/data/faq.json";
export const FAQSection = () => {

    return (
        <section className="w-full max-w-7xl px-3 flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl text-center">FAQ</h1>

                <span className="font-bold text-base">
                    Se você tiver mais duvidas, por favor entre em contato conosco
                </span>
            </div>

            <div className="grid grid-cols-1 gap-7
                md:max-lg:max-w-3xl
                lg:grid-cols-2
            ">
                {faq.map(ask => (
                    <div className="flex flex-col gap-2" key={ask.question}>
                        <span className="font-bold text-lg">{ask.question}</span>
                        <span className="text-justify">{ask.answer}</span>
                    </div>
                ))}
            </div>

        </section>
    );
};