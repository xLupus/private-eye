"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination } from "swiper/modules";
import services from "@/data/services.json";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const ServiceSection = () => {

    return (
        <section className="w-full max-w-7xl px-3 flex flex-col items-center gap-10">
            <h1 className="font-bold text-2xl text-center">Serviços</h1>

            <span className="text-center">
                Se você precisa de serviços confiáveis e discretos de investigação particular, estamos aqui para ajudar. Oferecemos uma ampla gama de serviços para atender às suas necessidades, garantindo total confidencialidade e resultados eficazes. Confira abaixo os serviços que oferecemos:
            </span>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                style={{ display: 'grid', width: "100%", height: "100%", padding: 10, paddingBottom: 60 }}
                modules={[FreeMode, Mousewheel, Pagination]}
                pagination={{clickable: true}}
                mousewheel={{ releaseOnEdges: true }}
                grabCursor
                freeMode

            >
                {services.map(job => (
                    <SwiperSlide
                        className="shadow-xl px-5 bg-white py-8 border max-w-sm"
                        style={{ display: 'flex', flexDirection: 'column', gap: 15 }}
                        key={job.name}
                    >
                        <span className="block text-lg font-semibold">
                            {job.name}
                        </span>

                        <span className="block text-justify">
                            {job.description}
                        </span>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section >
    );
};