"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

type Stat = { value: number; suffix?: string; label: string };

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  // init = wartość docelowa → poprawny render bez JS (SSR)
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ content }: { content: BlockContent }) {
  const stats = (content.stats ?? []) as Stat[];

  return (
    <section className="metrics">
      <Container className="metrics-grid">
        {stats.map((s, i) => (
          <Reveal key={i} delay={0.09 * i} className="metric">
            <div className="metric-fig">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="metric-rule" />
            <div className="metric-label">{s.label}</div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
