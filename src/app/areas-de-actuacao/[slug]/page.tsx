import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { AREAS_DE_ACTUACAO, CONTACT } from "@/lib/constants";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AREAS_DE_ACTUACAO.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS_DE_ACTUACAO.find((a) => a.slug === slug);

  if (!area) {
    return { title: "Área não encontrada" };
  }

  return {
    title: area.titulo,
    description: area.descricao,
    alternates: { canonical: `/areas-de-actuacao/${area.slug}` },
    openGraph: {
      title: area.titulo,
      description: area.descricao,
      type: "website",
    },
  };
}

const processo = [
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
];

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = AREAS_DE_ACTUACAO.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const outrasAreas = AREAS_DE_ACTUACAO.filter((a) => a.slug !== area.slug).slice(
    0,
    4
  );

  return (
    <>
      <PageHeader
        eyebrow="Área de Actuação"
        title={area.titulo}
        description={area.descricao}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Visão Geral"
              title={`Serviços em ${area.titulo}`}
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {area.detalhe}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold text-forest hover:bg-gold/90">
                <Link href="/consultas">
                  Solicitar Consulta
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-forest/30 hover:bg-forest hover:text-white"
              >
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  <PhoneCall className="mr-2 size-4" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -right-4 -top-4 h-40 w-40 rounded-tl-3xl border-r-2 border-t-2 border-gold/50"
              aria-hidden="true"
            />
            <Image
              src="/images/areas.jpg"
              alt={`${area.titulo} — MPC Escritório de Advogados`}
              width={1400}
              height={934}
              className="relative rounded-xl object-cover shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="O Que Fazemos"
            title="Serviços prestados"
            description="Uma abordagem completa e integrada, do aconselhamento preventivo à representação em contencioso."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {area.servicos.map((servico) => (
              <div
                key={servico}
                className="flex items-start gap-4 rounded-xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-forest">
                  <CheckCircle2 className="size-5 text-gold" aria-hidden="true" />
                </span>
                <p className="pt-2 font-medium text-foreground">{servico}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Metodologia"
          title="Como trabalhamos"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processo.map((etapa) => (
            <li
              key={etapa.passo}
              className="relative border-t-2 border-gold/40 pt-6"
            >
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
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Mais Áreas"
            title="Outras áreas de actuação"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outrasAreas.map((outra) => (
              <Link
                key={outra.slug}
                href={`/areas-de-actuacao/${outra.slug}`}
                className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-gold/50 hover:shadow-lg"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-forest text-gold transition group-hover:bg-gold group-hover:text-forest">
                  <outra.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-forest">
                  {outra.titulo}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {outra.descricao}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Saber mais
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-20">
        <CtaBanner
          title={`Precisa de apoio em ${area.titulo.toLowerCase()}?`}
          description="Contacte-nos e obtenha uma análise inicial do seu caso por advogados especializados."
        />
      </section>
    </>
  );
}