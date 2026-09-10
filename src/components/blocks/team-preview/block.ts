import { defineBlock, fields } from "@cmssy/react";
import TeamPreview from "./TeamPreview";

export const teamPreviewProps = {
  eyebrow: fields.text({ label: "Nadtytuł" }),
  heading: fields.text({ label: "Nagłówek" }),
  allLabel: fields.text({ label: "Etykieta 'wszyscy'" }),
  members: fields.repeater({
    label: "Członkowie",
    itemLabel: "{name}",
    addButtonLabel: "Dodaj osobę",
    itemSchema: {
      name: fields.text({ label: "Imię i nazwisko" }),
      role: fields.text({ label: "Stanowisko" }),
      photo: fields.media({ label: "Zdjęcie" }),
      href: fields.link({ label: "Link" }),
    },
  }),
};

export const teamPreviewBlock = defineBlock({
  type: "team-preview",
  label: "Team Preview",
  component: TeamPreview,
  props: teamPreviewProps,
});
