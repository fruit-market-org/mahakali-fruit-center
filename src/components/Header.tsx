"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { CloseIcon, MenuIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-3 sm:h-[72px] sm:gap-4">
        <Link href="/" aria-label="Go to home page" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-leaf"
                    : "text-moss hover:bg-leaf-light hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-leaf" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Wrapper controls visibility: putting `hidden` on the button
              itself loses to its own `inline-flex` in the cascade. */}
          <span className="hidden sm:inline-flex">
            <WhatsAppButton />
          </span>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-ink transition-colors hover:bg-leaf-light lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-cream lg:hidden"
      >
        <nav className="container-page flex flex-col py-3" aria-label="Mobile">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active ? "bg-leaf-light text-leaf" : "text-ink hover:bg-cream-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mt-3 block sm:hidden">
            <WhatsAppButton className="w-full" size="lg" />
          </span>
        </nav>
      </div>
    </header>
  );
}
