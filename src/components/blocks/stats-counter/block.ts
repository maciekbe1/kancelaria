import { defineBlock, fields } from "@cmssy/react";
import StatsCounter from "./StatsCounter";

export const statsCounterProps = {
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
};

export const statsCounterBlock = defineBlock({
  type: "stats-counter",
  label: "Stats Counter",
  component: StatsCounter,
  props: statsCounterProps,
});
