import services from "@/data/services.json";
import * as motion from "framer-motion/client";

export const ServiceSection = () => {
    return (
        <section className="w-full flex flex-col items-center gap-10">
            <h1 className="font-bold text-2xl text-center">
                Serviços
            </h1>

            <span className="text-center">
                Se você precisa de serviços confiáveis e discretos de investigação particular, estamos aqui para ajudar. Oferecemos uma ampla gama de serviços para atender às suas necessidades, garantindo total confidencialidade e resultados eficazes. Confira abaixo os serviços que oferecemos:
            </span>

            <div className="grid grid-cols-1 gap-6
                lg:grid-cols-2
            ">
                {services.map(job => (
                    <motion.div
                        className="flex flex-col gap-6 shadow-lg px-5 bg-white py-6 border-l-8 border-l-gray-500 "
                        key={job.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                        viewport={{ once: true }}
                    >
                        <span className="block text-xl font-medium">{job.name}</span>

                        <span className="block text-justify">{job.description}</span>
                    </motion.div>
                ))}
            </div>
        </section >
    );
};