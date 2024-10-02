import audience from "@/data/audience";
import Image from "next/image";
import * as motion from "framer-motion/client";

export const AudienceSection = () => {
    const animation_audience_delay = [.1, .3, .5];

    return (
        <section className="grid grid-cols-1 gap-6
            xl:grid-cols-3 
        ">
            {audience.map((target, i) => (
                <motion.div
                    className="max-w-xl grid grid-cols-1 bg-white shadow-lg
                        md:grid-cols-5 md:max-w-7xl
                        lg:grid-cols-6 
                        xl:flex xl:flex-col
                    "
                    key={target.target}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: animation_audience_delay[i], duration: 1.5 } }}
                    viewport={{ once: true }}
                >
                    <Image src={target.poster} alt={target.target} className="w-full md:col-span-2 md:h-full xl:h-72" />

                    <div className="flex flex-col gap-3 p-4 text-justify w-full
                        md:col-span-3
                        lg:col-span-4
                        xl:flex-1
                    ">
                        <span className="block text-xl font-bold">{target.target}</span>

                        {target.description.map(paragraph => <span className="block">{paragraph}</span>)}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};