import type { Metadata } from "next";
import {
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  Video,
  MessageCircle,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ConsultaForm } from "@/components/forms/consulta-form";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Consultas Jurídicas",
  description:
    "Marque uma consulta jurídica no MPC Escritório de Advogados em Luanda — presencial, online ou via WhatsApp. Preencha o formulário e a nossa equipa entrará em contacto consigo.",
  alternates: { canonical: "/consultas" },
  openGraph: {
    title: "Consultas Jurídicas",
    description:
      "Consultas presencial, online ou via WhatsApp no MPC Escritório de Advogados em Luanda.",
  },
};

const modalidades = [
  {
    icon: Building2,
    titulo: "Consulta Presencial",
    descricao:
      "Atendimento personalizado no escritório, em Luanda, com total privacidade e disponibilidade para analisar o seu caso.",
    detalhe: "No escritório · Luanda",
  },
  {
    icon: Video,
    titulo: "Consulta Online",
    descricao:
      "Reunião por videochamada através do Google Meet ou Zoom, com a mesma qualidade e confidencialidade de uma consulta presencial.",
    detalhe: "Google Meet ou Zoom",
  },
  {
    icon: MessageCircle,
    titulo: "Consulta via WhatsApp",
    descricao:
      "Ideal para clientes fora da cidade ou do país. Orientação directa e acompanhamento em tempo real através do WhatsApp.",
    detalhe: "Para clientes fora da cidade ou do país",
  },
];

const processo = [
  {
    passo: "01",
    titulo: "Solicita o contacto",
    descricao:
      "Preenche o formulário ou contacta-nos directamente pelos meios disponíveis.",
  },
  {
    passo: "02",
    titulo: "A equipa analisa o pedido",
    descricao:
      "Um advogado analisa a informação apresentada e avalia o seu caso.",
  },
  {
    passo: "03",
    titulo: "Agenda-se a consulta",
    descricao:
      "Confirmamos a data, a hora e a modalidade (presencial, online ou WhatsApp).",
  },
  {
    passo: "04",
    titulo: "O escritório acompanha o caso",
    descricao:
      "Após a consulta, acompanhamos o seu caso com rigor e comunicação constante.",
  },
];

const infos = [
  {
    icon: PhoneCall,
    titulo: "Telefone",
    linhas: [CONTACT.phone, CONTACT.phoneSecondary],
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    titulo: "WhatsApp",
    linhas: [CONTACT.phone],
    href: `https://wa.me/${CONTACT.phone.replace(/[^\d]/g, "")}`,
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

export default function ConsultasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultas"
        title="Agende uma consulta com a nossa equipa"
        description="Escolha a modalidade que melhor se adequa a si — presencial, online ou via WhatsApp — e receba apoio jurídico onde quer que esteja."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Modalidades de Consulta"
          title="Como prefere ser atendido?"
          description="Três modalidades pensadas para a sua conveniência, todas com a mesma confidencialidade e rigor."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {modalidades.map((m) => (
            <article
              key={m.titulo}
              className="group rounded-xl border border-border/70 bg-card p-8 shadow-sm transition hover:border-gold/50 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-forest text-gold transition group-hover:bg-gold group-hover:text-forest">
                <m.icon className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-heading text-xl font-semibold text-forest">
                {m.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {m.descricao}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
                {m.detalhe}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <SectionHeading
                eyebrow="Marcação"
                title="Solicite a sua consulta"
                description="Preencha o formulário abaixo com os dados do seu caso. A nossa equipa avaliará o pedido e entrará em contacto consigo para agendar."
              />
              <div className="mt-8">
                <ConsultaForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl bg-forest p-8 text-white shadow-lg">
                <h2 className="font-heading text-xl font-bold text-gold">
                  Prefere contactar directamente?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  A nossa equipa está disponível durante o horário de
                  funcionamento para esclarecer dúvidas e agendar a sua consulta.
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {infos.map((info) => (
                    <li key={info.titulo} className="flex gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-white/10">
                        <info.icon
                          className="size-4 text-gold"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="font-medium text-white">{info.titulo}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-white/75 transition hover:text-gold"
                          >
                            {info.linhas[0]}
                          </a>
                        ) : (
                          <p className="text-white/75">{info.linhas[0]}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gold/40 bg-gold/5 p-8">
                <ShieldCheck className="size-8 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-forest">
                  Confidencialidade garantida
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Todas as informações partilhadas são estritamente
                  confidenciais e protegidas pelo segredo profissional, em
                  qualquer modalidade de consulta.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Como Funciona"
          title="Um processo simples e organizado"
          description="Da solicitação ao acompanhamento, garantimos clareza e organização em cada etapa."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processo.map((etapa) => (
            <li
              key={etapa.passo}
              className="relative rounded-xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <span className="font-heading text-4xl font-bold text-gold">
                {etapa.passo}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-forest">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {etapa.descricao}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}