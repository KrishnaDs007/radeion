"use client";

import Link from "next/link";
import { useState } from "react";

type MobileMenuGroup = {
  title: string;
  href: string;
  items: string[];
};

export function MobileMenu({ groups }: { groups: MobileMenuGroup[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string>("Products");

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-menu-wrap">
      <button className="mobile-menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label="Toggle navigation menu">
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-menu-panel">
          <Link className="mobile-menu-link" href="/" onClick={closeMenu}>Home</Link>

          {groups.map((group) => (
            <div className="mobile-menu-group" key={group.title}>
              <button className="mobile-menu-group-trigger" type="button" onClick={() => setOpenGroup(openGroup === group.title ? "" : group.title)} aria-expanded={openGroup === group.title}>
                {group.title}
                <span>{openGroup === group.title ? "−" : "+"}</span>
              </button>
              {openGroup === group.title && (
                <div className="mobile-submenu">
                  <Link className="mobile-submenu-main" href={group.href} onClick={closeMenu}>Open {group.title}</Link>
                  {group.items.map((item) => (
                    <Link className="mobile-submenu-link" href={getMobileHref(item, group.href)} onClick={closeMenu} key={item}>
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link className="button-primary mt-2 justify-center" href="/demo" onClick={closeMenu}>Request demo</Link>
        </div>
      )}
    </div>
  );
}

function getMobileHref(item: string, fallbackHref: string) {
  if (item === "Security") return "/security";
  if (item === "Privacy") return "/privacy";
  if (item === "Request demo") return "/demo";
  if (item === "Contact") return "/company#contact";
  return fallbackHref;
}
