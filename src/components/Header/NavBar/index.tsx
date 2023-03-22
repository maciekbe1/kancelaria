import clsx from "clsx";
import { Container, Drawer } from "components";
import { links } from "components/Hero/constants";
import useHeaderState from "hooks/useHeaderState";
import Link from "next/link";
import { useState } from "react";
import { LogoIcon } from "icons/LogoIcon";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewportScrolled, isMobile } = useHeaderState();

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 w-full border-b-2 border-gold -mt-1",
        isViewportScrolled ? "bg-slate-200/90" : "bg-slate-800/50"
      )}
    >
      <Container
        className={clsx(
          "flex items-center justify-between mx-auto",
          isViewportScrolled ? "text-slate-900" : "text-white"
        )}
      >
        <Link href="/">
          <LogoIcon size={isMobile ? 32 : 54} />
        </Link>
        <div className="flex items-center space-x-1">
          <ul className="hidden space-x-2 md:inline-flex">
            <li>
              <Link
                href="/zespol"
                className="px-4 py-2 font-semibold hover:text-gold"
              >
                Zespół Kancelarii
              </Link>
            </li>
            <li>
              <Link
                href="/specjalizacje"
                className="px-4 py-2 font-semibold hover:text-gold"
              >
                Specjalizacje
              </Link>
            </li>
          </ul>
          <div className="inline-flex md:hidden">
            <button
              className="flex-none px-2 drawer-content"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className="flex flex-col">
          <Link
            className="btn btn-link text-gold"
            href="/zespol"
            onClick={() => setIsOpen(false)}
          >
            Zespół Kancelarii
          </Link>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                className="btn btn-link text-gold"
                href={`/specjalizacje#${link.id}`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
};
