import { defineBlock, fields } from "@cmssy/react";
import TeamMember from "./TeamMember";

export const teamMemberBlock = defineBlock({
  type: "team-member",
  label: "Team Member",
  component: TeamMember,
  props: {
    role: fields.singleLine({ label: "Stanowisko" }),
    name: fields.singleLine({ label: "Imię i nazwisko" }),
    bio: fields.richText({ label: "Bio" }),
    photo: fields.media({ label: "Zdjęcie" }),
    phone: fields.singleLine({ label: "Telefon" }),
    email: fields.singleLine({ label: "E-mail" }),
    reverse: fields.boolean({ label: "Odwróć układ" }),
    anchorId: fields.singleLine({ label: "ID kotwicy" }),
  },
});

export interface BlockContent {
  role?: string;
  name?: string;
  bio?: string;
  photo?: string;
  phone?: string;
  email?: string;
  reverse?: boolean;
  anchorId?: string;
}
