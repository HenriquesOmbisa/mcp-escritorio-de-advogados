import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT,
  NAV_LINKS,
  AREAS_DE_ACTUACAO,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-image.png)" }}
      >
        <div className="absolute inset-0 bg-forest/95" aria-hidden="true" />

        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-md border border-gold/60 bg-white/5">
                    <Scale className="size-5 text-gold" aria-hidden="true" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-heading text-lg font-bold text-white">
                      MPC
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                      Escritório de Advogados
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {SITE_DESCRIPTION}
                </p>
              </div>

              <nav aria-label="Navegação do rodapé">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                  Navegação
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/75 transition hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Áreas de actuação">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                  Áreas de Actuação
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {AREAS_DE_ACTUACAO.slice(0, 6).map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas-de-actuacao/${area.slug}`}
                        className="text-white/75 transition hover:text-gold"
                      >
                        {area.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                  Contactos
                </h3>
                <ul className="mt-4 space-y-3.5 text-sm text-white/75">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{CONTACT.address}</span>
                  </li>
                  <li>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="flex gap-3 transition hover:text-gold"
                    >
                      <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex gap-3 transition hover:text-gold"
                    >
                      <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{CONTACT.hours}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-center text-[11px] text-white/60 sm:flex-row sm:justify-between sm:gap-3 sm:text-xs">
              <p>
                © {year} {SITE_NAME}. Todos os direitos reservados.
              </p>
              <p className="sm:text-right">
                Ordem dos Advogados de Angola · Inscrição nº 001/MPC
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}