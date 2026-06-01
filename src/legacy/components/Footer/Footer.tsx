import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { Container } from "components";
import { contacts } from "components/Header/TopBar/constants";
import Link from "next/link";
import { address, addressNote } from "../../constants";

export const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <Container className="md:flex md:items-center md:justify-between">
        <div className="text-gray-300">
          {contacts.map((contact, index) => (
            <div className="flex mb-2" key={index}>
              <Icon path={contact.icon} size={1} />
              <a
                href={`${contact.type}:${contact.value}`}
                className="ml-2 hover:text-gold"
                target={contact.target}
                rel={contact.rel}
              >
                {contact.value}
              </a>
            </div>
          ))}
          <div className="flex mb-2">
            <Icon path={mdiMapMarker} size={1} />
            <div className="ml-2">
              <a
                className="hover:text-gold"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Otwórz adres w Mapach Google"
              >
                {address}
              </a>
              {addressNote && (
                <div className="mt-1 text-xs opacity-90">{addressNote}</div>
              )}
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap items-center sm:mt-2">
          <li>
            <Link
              aria-label="Polityka prywatności"
              href="/privacy-policy"
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
