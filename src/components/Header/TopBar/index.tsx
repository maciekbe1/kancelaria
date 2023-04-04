import Icon from "@mdi/react";
import { Container } from "components";
import { contacts } from "./constants";

export const TopBar = () => {
  return (
    <div className="hidden text-gray-300 bg-slate-800 md:block">
      <Container>
        <div className="flex">
          {contacts.map((contact, index) => (
            <div className="flex first:mr-3 last:ms-auto" key={index}>
              <Icon path={contact.icon} size={1} />
              <a
                href={`${contact.type}:${contact.value}`}
                className="ml-2 hover:text-gold"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
