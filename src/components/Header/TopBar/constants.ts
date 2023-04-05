import { mdiPhone, mdiEmailOutline } from "@mdi/js";
import { phoneNumber, phoneNumber2 } from "../../../constants";

export const contacts = [
  {
    type: "tel",
    value: phoneNumber,
    icon: mdiPhone,
  },
  {
    type: "tel",
    value: phoneNumber2,
    icon: mdiPhone,
  },
  {
    type: "mailto",
    value: "biuro@kancelaria-restrukturyzacje.pl",
    icon: mdiEmailOutline,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
