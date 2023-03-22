import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { agents } from "./constants";
import Icon from "@mdi/react";
import { mdiImageOffOutline } from "@mdi/js";
import Link from "next/link";
import { domAnimation, LazyMotion, m } from "framer-motion";

export const AgentSwiper = () => {
  return (
    <div className="relative z-20 hidden -mt-32 sm:block">
      <Swiper
        modules={[A11y, Navigation, Autoplay]}
        loop={true}
        allowTouchMove={false}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        autoplay={{
          delay: 4000,
        }}
        className="swiper-slider"
      >
        {agents.map((agent, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-1">
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col justify-between mt-36"
                  >
                    <div>
                      <p className="mb-4 text-2xl uppercase text-gold">
                        {agent.spec}
                      </p>
                      <h3 className="mb-6 font-serif text-6xl">{agent.name}</h3>
                      <p>{agent.description[0]}</p>
                    </div>
                    <div>
                      <Link
                        className="mb-6 btn btn-outline btn-md"
                        href={`/about#${agent.id}`}
                      >
                        Zobacz więcej
                      </Link>
                    </div>
                  </m.div>
                </LazyMotion>
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-end"
                  >
                    {agent.image ? (
                      <Image
                        alt={agent.name}
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 90vw, (max-width: 1920px) 50vw, 880px"
                        src={agent.image}
                        width={400}
                        height={494}
                      />
                    ) : (
                      <div className="bg-gray-300 h-[594px] w-[400px] flex items-center justify-center rounded-md">
                        <Icon path={mdiImageOffOutline} size={4} />
                      </div>
                    )}
                  </m.div>
                </LazyMotion>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Controls />
    </div>
  );
};

const Controls = () => {
  return (
    <div className="flex">
      <button className="mr-3 prev btn btn-sm">{"<"}</button>
      <button className="next btn btn-sm">{">"}</button>
    </div>
  );
};
