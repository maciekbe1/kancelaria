import { mdiPhone, mdiEmailOutline } from "@mdi/js";
import { phoneNumber } from "../../../constants";

export const contacts = [
  {
    type: "tel",
    value: phoneNumber,
    icon: mdiPhone,
  },
  {
    type: "mailto",
    value: "biuro@kancelaria-restrukturyzacje.pl",
    icon: mdiEmailOutline,
  },
];
