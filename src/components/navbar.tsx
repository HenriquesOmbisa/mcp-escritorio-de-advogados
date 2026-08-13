"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Scale, Menu, X, Phone, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-image.png)" }}
      >
        <div className="absolute inset-0 bg-forest/90" aria-hidden="true" />

        <div className="relative">
          <div className="hidden border-b border-white/10 text-xs text-gold-soft md:block">
            <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition hover:text-gold"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 transition hover:text-gold"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </div>
              <p className="text-white/70">{CONTACT.hours}</p>
            </div>
          </div>

          <nav
            aria-label="Navegação principal"
            className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          >
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-md border border-gold/60 bg-white/5">
                <Scale className="size-6 text-gold" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-lg font-bold tracking-wide text-white">
                  MPC
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  Escritório de Advogados
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-white/85 transition hover:text-gold",
                      active && "text-gold"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Button asChild className="bg-gold text-forest hover:bg-gold/90">
                <Link href="/consultas">Marcar Consulta</Link>
              </Button>
            </div>

            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-md text-white transition hover:text-gold lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-forest lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 transition hover:text-gold",
                      active && "bg-white/5 text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button asChild className="w-full bg-gold text-forest hover:bg-gold/90">
                  <Link href="/consultas" onClick={() => setOpen(false)}>
                    Marcar Consulta
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}