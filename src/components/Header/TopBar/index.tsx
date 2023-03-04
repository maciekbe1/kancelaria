import Icon from "@mdi/react";
import { Container } from "components";
import { contacts } from "./constants";

export const TopBar = () => {
  return (
    <div className="bg-slate-800 text-gray-300 hidden md:block">
      <Container>
        <div className="flex">
          {contacts.map((contact, index) => (
            <div className="flex mr-3 last:mr-0" key={index}>
              <Icon path={contact.icon} size={1} />
              <a
                href={`${contact.type}:${contact.value}`}
                className="ml-2 hover:text-orange-600"
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
