import clsx from "clsx";
import { Container, Drawer } from "components";
import { links } from "components/Hero/constants";
import useHeaderState from "hooks/useHeaderState";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewportScrolled } = useHeaderState();

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 w-full",
        isViewportScrolled ? "bg-slate-200/90" : "bg-slate-800/50"
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between mx-auto",
            isViewportScrolled ? "text-slate-900" : "text-white"
          )}
        >
          <Link href="/">Logo</Link>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              <li>
                <Link
                  href="/o-nas"
                  className="px-4 py-2 font-semibold hover:text-gold"
                >
                  O nas
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
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className="flex flex-col">
          <Link className="btn btn-link text-gold" href="/o-nas">
            O nas
          </Link>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                className="btn btn-link text-gold"
                href={link.href}
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
