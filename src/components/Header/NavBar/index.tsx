import { Container } from "components";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "../../Drawer/Drawer";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-800/50 w-full sticky top-0 z-30">
      <Container>
        <div className="flex items-center justify-between mx-auto text-white">
          <Link href="/">Logo</Link>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              <li>
                <Link href="/" className="px-4 py-2 font-semibold rounded">
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="px-4 py-2 font-semibold text-white rounded"
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
        <ul>
          <li>hello</li>
          <li>hi</li>
        </ul>
      </Drawer>
    </div>
  );
};
