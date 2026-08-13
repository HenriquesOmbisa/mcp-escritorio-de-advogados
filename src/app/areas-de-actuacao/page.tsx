import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { AREAS_DE_ACTUACAO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Áreas de Actuação",
  description:
    "Direito Civil, Comercial, do Trabalho, Fiscal, Penal, Energia, Imobiliário, Banca e Seguros. Conheça as áreas de actuação do MPC Escritório de Advogados em Angola.",
  alternates: { canonical: "/areas-de-actuacao" },
  openGraph: {
    title: "Áreas de Actuação",
    description:
      "As áreas de actuação do MPC Escritório de Advogados: assessoria e representação jurídica multidisciplinar.",
  },
};

export default function AreasActuacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Áreas de Actuação"
        title="Prática jurídica multidisciplinar"
        description="Assessoria, consultoria e representação em todas as principais áreas do direito, com especialização ao serviço dos seus interesses."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS_DE_ACTUACAO.map((area) => (
            <Link
              key={area.slug}
              href={`/areas-de-actuacao/${area.slug}`}
              className="group rounded-xl border border-border/70 bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-forest text-gold transition group-hover:bg-gold group-hover:text-forest">
                <area.icon className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-heading text-xl font-semibold text-forest">
                {area.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.descricao}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                Saber mais
                <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Abordagem"
            title="Como trabalhamos em cada área"
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                passo: "01",
                titulo: "Análise",
                descricao:
                  "Ouvimos o cliente e analisamos em profundidade o contexto jurídico do caso.",
              },
              {
                passo: "02",
                titulo: "Estratégia",
                descricao:
                  "Definimos a estratégia mais adequada, com clareza sobre riscos e alternativas.",
              },
              {
                passo: "03",
                titulo: "Actuação",
                descricao:
                  "Executamos as diligências e actos necessários, dentro e fora dos tribunais.",
              },
              {
                passo: "04",
                titulo: "Resultado",
                descricao:
                  "Acompanhamos o processo até à conclusão, mantendo o cliente sempre informado.",
              },
            ].map((etapa) => (
              <li key={etapa.passo} className="relative border-t-2 border-gold/40 pt-6">
                <span className="font-heading text-3xl font-bold text-gold">
                  {etapa.passo}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-forest">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {etapa.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24 pt-20">
        <CtaBanner
          title="Não encontrou a área que procura?"
          description="Fale connosco. Se não soubermos responder, conheceremos quem melhor o possa ajudar."
        />
      </section>
    </>
  );
}