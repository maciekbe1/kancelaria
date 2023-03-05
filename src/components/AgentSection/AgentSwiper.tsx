import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { agents } from "./constants";
import Icon from "@mdi/react";
import { mdiImageOffOutline } from "@mdi/js";
import clsx from "clsx";
import Link from "next/link";

type AgentSwiperProps = {
  className?: string;
};

export const AgentSwiper = ({ className }: AgentSwiperProps) => {
  return (
    <div className={clsx("relative z-20 -mt-32", className)}>
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
                <div className="flex flex-col justify-between mt-36">
                  <div>
                    <p className="mb-4 text-2xl uppercase text-gold">
                      Radca prawny
                    </p>
                    <h3 className="mb-6 font-serif text-6xl">{agent.name}</h3>
                    <p>{agent.description}</p>
                  </div>
                  <div>
                    <Link className="mb-6 btn btn-outline btn-md" href="/">
                      Zobacz więcej
                    </Link>
                  </div>
                </div>
                <div className="flex justify-end">
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
                </div>
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
