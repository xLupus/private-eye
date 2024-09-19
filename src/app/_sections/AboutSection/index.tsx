import Image from "next/image";
import Picture from "@/assets/images/holmes.webp";
import about from "@/data/info.js";

export const AboutSection = () => {

    return (
        <section className="w-full max-w-7xl px-3 flex flex-col items-center gap-10">
            <h1 className="font-bold text-2xl text-center">Sobre</h1>

            <div className="grid grid-cols-1 gap-5 
                md:grid-cols-5
                lg:grid-cols-6
            ">
                <div className="md:relative md:h-full 
                    md:col-span-2
                ">
                    <div className="flex justify-center md:sticky top-24 mx-auto">
                        <Image src={Picture} alt="" width={340} className="rounded-lg" />
                    </div>
                </div>

                <div className="flex flex-col gap-8 
                    md:col-span-3 
                    lg:col-span-4
                ">
                    <div className="flex flex-col gap-3 text-justify">
                        <span>
                            Com anos de experiência no campo da investigação, dedico-me a ajudar pessoas e empresas a obterem respostas e soluções para uma variedade de questões delicadas e complexas.
                        </span>

                        <span>
                            Utilizando técnicas avançadas e um conjunto diversificado de habilidades, estou preparado para lidar com uma ampla gama de casos, desde questões familiares até problemas corporativos.
                        </span>

                        <span>
                            Minha abordagem para cada caso é personalizada e centrada no cliente. Trabalho de perto com meus clientes para entender suas necessidades e objetivos específicos, garantindo que cada investigação seja conduzida com precisão e discrição. Meu compromisso com a ética e a integridade é fundamental em cada etapa do processo.
                        </span>

                        <span>
                            Embora esteja baseado em São Paulo - Capital, estou disponível para atender clientes em uma ampla área geográfica. Meu compromisso é fornecer serviços de investigação acessíveis e eficazes, independentemente de onde meus clientes estejam localizados.
                        </span>
                    </div>

                    <div className="flex flex-col gap-8">

                        <span className="font-bold text-xl">
                            Ao contratar meus serviços, você pode contar com:
                        </span>

                        <div className="flex flex-col gap-5">
                            {about.whyus.map(reason => (
                                <div className="flex flex-col gap-2" key={reason.title}>
                                    <span className="font-semibold text-xl">{reason.title}</span>

                                    <span>
                                        {reason.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};