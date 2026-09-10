import { defineBlock, fields } from "@cmssy/react";
import TeamMember from "./TeamMember";

export const teamMemberProps = {
  role: fields.text({ label: "Stanowisko" }),
  name: fields.text({ label: "Imię i nazwisko" }),
  bio: fields.richText({ label: "Bio" }),
  photo: fields.media({ label: "Zdjęcie" }),
  phone: fields.text({ label: "Telefon" }),
  email: fields.text({ label: "E-mail" }),
  reverse: fields.boolean({ label: "Odwróć układ" }),
  anchorId: fields.text({ label: "ID kotwicy" }),
};

export const teamMemberBlock = defineBlock({
  type: "team-member",
  label: "Team Member",
  component: TeamMember,
  props: teamMemberProps,
});
