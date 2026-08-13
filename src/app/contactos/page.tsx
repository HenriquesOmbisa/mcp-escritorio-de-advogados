import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ContactoForm } from "@/components/forms/contacto-form";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Contacte o MPC Escritório de Advogados em Luanda, Angola. Morada, telefone, email e horário de funcionamento.",
  alternates: { canonical: "/contactos" },
  openGraph: {
    title: "Contactos",
    description:
      "Morada, telefone, email e horário de funcionamento do MPC Escritório de Advogados.",
  },
};

const contactos = [
  {
    icon: MapPin,
    titulo: "Morada",
    linhas: [CONTACT.address],
  },
  {
    icon: Phone,
    titulo: "Telefone",
    linhas: [CONTACT.phone, CONTACT.phoneSecondary],
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    titulo: "Email",
    linhas: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Clock,
    titulo: "Horário",
    linhas: [CONTACT.hours],
  },
];

export default function ContactosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contactos"
        title="Fale connosco"
        description="Estamos em Luanda e prontos a ouvi-lo. Visite-nos, ligue-nos ou envie-nos uma mensagem."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactos.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border/70 bg-card p-7 shadow-sm">
                <span className="flex size-11 items-center justify-center rounded-lg bg-forest text-gold">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-lg font-semibold text-forest">
                  {c.titulo}
                </h2>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {c.linhas.map((linha, i) =>
                    c.href && i === 0 ? (
                      <a
                        key={linha}
                        href={c.href}
                        className="block transition hover:text-gold"
                      >
                        {linha}
                      </a>
                    ) : (
                      <p key={linha}>{linha}</p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
              Envie-nos uma mensagem
            </h2>
            <p className="mt-3 text-muted-foreground">
              Preencha o formulário e responderemos o mais breve possível.
              Os campos assinalados são obrigatórios.
            </p>
            <div className="mt-8">
              <ContactoForm />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
              Como chegar
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-border/70 shadow-sm">
              <iframe
                title="Localização do MPC Escritório de Advogados em Luanda"
                src="https://www.google.com/maps?q=-8.804975,13.302531&z=17&hl=pt&output=embed"
                className="h-96 w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 rounded-xl bg-forest p-7 text-white">
              <h3 className="font-heading text-lg font-bold text-gold">
                Atendimento ao público
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                O atendimento presencial é feito mediante marcação prévia, para
                garantir total disponibilidade e privacidade. Contacte-nos para
                agendar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}