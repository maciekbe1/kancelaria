import Icon from "@mdi/react";
import { Container } from "components";
import { contacts } from "components/Header/TopBar/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <Container className="md:flex md:items-center md:justify-between">
        <div className="text-gray-300">
          {contacts.map((contact, index) => (
            <div className="flex mb-2 last:mr-0" key={index}>
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

        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <Link
              href="/polityka-prywatności"
              className="mr-4 text-sm font-semibold text-gray-300 hover:text-gold md:mr-6 dark:text-gray-400"
            >
              Polityka prywatności
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
