"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { LogoMark } from "@/components/logo-mark";
import { BlockContent } from "./block";

type NavLink = { label: string; href: string };
type Phone = { number: string };

const tel = (n: string) => `tel:${n.replace(/\s+/g, "")}`;

export default function Header({ content }: { content: BlockContent }) {
  const { brand = "Kancelaria Restrukturyzacje", email = "" } = content;
  const logoUrl = (content as { logo?: string }).logo ?? "";
  const links = (content.links ?? []) as NavLink[];
  const phones = (content.phones ?? []) as Phone[];

  const [open, setOpen] = useState(false);

  // Dwukolorowe logo: pierwszy wyraz + reszta (jak w UI Kit)
  const [brandHead, ...brandRest] = brand.split(" ");
  const brandTail = brandRest.join(" ");

  const logo = (
    <a href="/" className="logo">
      {logoUrl ? (
        <img className="logo-img" src={logoUrl} alt={brand} />
      ) : (
        <>
          <LogoMark />
          <span className="logo-word">
            {brandHead}
            {brandTail ? (
              <span className="logo-word-2"> {brandTail}</span>
            ) : null}
          </span>
        </>
      )}
    </a>
  );

  return (
    <>
      {phones.length || email ? (
        <div className="topbar">
          <Container className="topbar-inner">
            <div className="topbar-phones">
              {phones.map((p, i) => (
                <a key={i} href={tel(p.number)}>
                  {p.number}
                </a>
              ))}
            </div>
            {email ? (
              <a className="topbar-mail" href={`mailto:${email}`}>
                {email}
              </a>
            ) : null}
          </Container>
        </div>
      ) : null}

      <header className="navbar">
        <Container className="navbar-inner">
          {logo}
          <nav className="nav-links">
            {links.map((l, i) => (
              <a key={i} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </Container>
      </header>

      {open ? (
        <div
          className="drawer-scrim"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="drawer-close"
              aria-label="Zamknij menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {links.map((l, i) => (
              <a key={i} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="drawer-foot">
              {phones.map((p, i) => (
                <a key={i} href={tel(p.number)}>
                  {p.number}
                </a>
              ))}
              {email ? <a href={`mailto:${email}`}>{email}</a> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
