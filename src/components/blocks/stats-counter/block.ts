import { defineBlock, fields } from "@cmssy/react";
import StatsCounter from "./StatsCounter";

export const statsCounterBlock = defineBlock({
  type: "stats-counter",
  label: "Stats Counter",
  component: StatsCounter,
  props: {
    stats: fields.repeater({
      label: "Statystyki",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj statystykę",
      itemSchema: {
        value: fields.number({ label: "Wartość" }),
        suffix: fields.text({ label: "Suffix" }),
        label: fields.text({ label: "Etykieta" }),
      },
    }),
  },
});

export interface BlockContent {
  stats?: Array<{
    value: number;
    suffix?: string;
    label: string;
  }>;
}
