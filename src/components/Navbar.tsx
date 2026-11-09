"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, siteName } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

const LOGIN_URL = "https://hub.banij.co/login";

export default function Navbar() {
  const pathname = usePathname();
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const activeLinkStyle = {
    backgroundColor: "#FD6B04",
    color: "#FFFFFF",
  };

  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0A17.9 17.9 0 0112 21.75c-2.68 0-5.22-.58-7.5-1.65z" />
    </svg>
  );

  const items = navLinks.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className={pathname === link.href ? "menu-active" : undefined}
        style={pathname === link.href ? activeLinkStyle : undefined}
      >
        {link.label}
      </Link>
    </li>
  ));

  return (   
    <header className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
      <div className="navbar-start">
        <div className="relative lg:hidden">
          <button type="button" className="btn btn-circle border-base-300 bg-base-100 text-base-content shadow-sm transition-colors hover:border-[#FD6B04] hover:bg-[#FD6B04] hover:text-white" aria-label="Menu" aria-expanded={navMenuOpen} aria-controls="mobile-nav-menu" onClick={() => setNavMenuOpen((open) => !open)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Link
          href="/"
          className="btn btn-ghost absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:static lg:translate-x-0 lg:translate-y-0"
          style={pathname === "/" ? { backgroundColor: "transparent", borderColor: "transparent" } : undefined}
        >
          <Image src="/logo/logo-removebg-preview.png" alt={`${siteName} logo`} width={160} height={80} className="h-10 w-auto object-contain" priority />
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </nav>
      <div className="navbar-end gap-2">
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle className="bg-base-100 text-base-content hover:border-[#FD6B04] hover:bg-[#FD6B04] hover:text-white" />
        </div>
        {/* Log in: goes to the client hub on every screen size */}
        <a
          href={LOGIN_URL}
          className="btn btn-circle navbar-login border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00] max-lg:btn-ghost max-lg:border-transparent max-lg:bg-transparent max-lg:text-base-content max-lg:shadow-none max-lg:hover:border-transparent max-lg:hover:bg-base-200"
          aria-label="Log in"
          title="Log in"
        >
          {userIcon}
        </a>
      </div>

      <div className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-hidden lg:hidden ${navMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!navMenuOpen}>
        {/* Invisible click-catcher: tapping outside the card closes it */}
        <button type="button" aria-label="Close menu" tabIndex={-1} onClick={() => setNavMenuOpen(false)} className="absolute inset-0 cursor-default" />
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className={`absolute left-4 top-2 w-48 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl transition-all duration-300 ease-out ${
            navMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-[calc(100%+2rem)] opacity-0"
          }`}
        >
          <ul className="menu menu-sm w-full gap-1 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setNavMenuOpen(false)} className={pathname === link.href ? "menu-active" : undefined} style={pathname === link.href ? activeLinkStyle : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-base-300 pt-2 pl-3 text-sm">
            Dark mode
            <ThemeToggle className="btn-sm" />
          </div>
        </nav>
      </div>
      </div>
    </header>
  );
}
