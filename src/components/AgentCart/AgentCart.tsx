import { mdiImageOffOutline } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { AgentContact } from "./AgentContact";

export type AgentCartProps = {
  agent: {
    id: string;
    description: string[];
    image: string;
    name: string;
    spec: string;
    email: string;
    phoneNumber: string;
  };
  isImageRight?: boolean;
};

export const AgentCart = ({ isImageRight, agent }: AgentCartProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const isTextUnderImage =
    agent.id === "wiktoria-danowska" || agent.id === "lukasz-zablocki";
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={{ opacity: 0, x: isImageRight ? 55 : -55 }}
        animate={inView ? { opacity: 1, x: 0 } : "hidden"}
        variants={variants}
        transition={{ delay: 0.55, duration: 1 }}
        className="mb-20 last:mb-0"
        id={agent.id}
      >
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
          <div className={clsx(isImageRight && "order-last")}>
            <div>
              <p className="mb-4 text-2xl uppercase text-gold">{agent.spec}</p>
              <h2 className="mb-6 font-serif text-6xl">{agent.name}</h2>
            </div>
            <AgentContact className="block my-4 lg:hidden" agent={agent} />
            {agent.description.map((description, index) => (
              <p className="mb-4" key={index}>
                {description}
              </p>
            ))}
            {!isTextUnderImage && (
              <AgentContact className="hidden lg:block" agent={agent} />
            )}
          </div>
          <div
            className={clsx(
              "order-first lg:order-none",
              !isImageRight && "flex justify-center lg:justify-end",
              isImageRight && "flex justify-center lg:justify-start"
            )}
          >
            {agent.image ? (
              <div>
                <Image
                  alt={agent.name}
                  className="object-cover object-top mb-6 rounded-md shadow-2xl lg:mb-0 lg:h-max h-96 lg:object-center"
                  sizes="(max-width: 768px) 90vw, (max-width: 1920px) 50vw, 880px"
                  src={agent.image}
                  width={400}
                  height={494}
                />
                {isTextUnderImage && (
                  <AgentContact
                    className="hidden lg:block lg:mt-4"
                    agent={agent}
                  />
                )}
              </div>
            ) : (
              <div className="bg-gray-300 w-full h-[594px] lg:w-[400px] flex items-center justify-center rounded-md">
                <Icon path={mdiImageOffOutline} size={4} />
              </div>
            )}
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};
