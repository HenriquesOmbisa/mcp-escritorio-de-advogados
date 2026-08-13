import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { AREAS_DE_ACTUACAO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MPC Escritório de Advogados – Advocacia em Angola",
  description:
    "Sociedade de advogados em Luanda com prática em Direito Civil, Comercial, do Trabalho, Fiscal e Penal. Consultas e assessoria jurídica com rigor e confidencialidade.",
};

const compromissos = [
  "Confidencialidade e sigilo profissional",
  "Análise rigorosa de cada caso",
  "Comunicação clara e constante",
  "Honorários transparentes e contratualizados",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-40 w-40 rounded-tr-3xl border-l-2 border-t-2 border-gold/50" aria-hidden="true" />
            <Image
              src="/images/about.jpg"
              alt="Livros de direito e martelo de juiz sobre uma mesa"
              width={1200}
              height={800}
              className="relative rounded-xl object-cover shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute -bottom-6 right-4 rounded-lg bg-forest px-6 py-5 text-white shadow-xl sm:right-8">
              <p className="font-heading text-3xl font-bold text-gold">18+</p>
              <p className="text-sm text-white/80">Anos de experiência</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Quem Somos"
              title="Advocacia de excelência ao serviço dos seus interesses"
              description="O MPC Escritório de Advogados é uma sociedade jurídica sediada em Luanda, composta por profissionais experientes dedicados à defesa dos direitos de particulares e empresas."
            />
            <ul className="mt-8 space-y-3">
              {compromissos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button asChild variant="outline" className="border-forest/30 hover:bg-forest hover:text-white">
                <Link href="/sobre-nos">
                  Conhecer o Escritório
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Áreas de Actuação"
            title="Serviços jurídicos completos"
            description="Uma prática multidisciplinar que dá resposta às necessidades legais de particulares, empresas e entidades públicas."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS_DE_ACTUACAO.slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                href={`/areas-de-actuacao/${area.slug}`}
                className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-gold/50 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-forest text-gold transition group-hover:bg-gold group-hover:text-forest">
                  <area.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-xl text-forest">
                  {area.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.descricao}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Saber mais
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-forest text-white hover:bg-forest-light">
              <Link href="/areas-de-actuacao">
                Ver todas as Áreas
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="O Nosso Método"
              title="Abordagem próxima, transparente e orientada a resultados"
              description="Cada cliente é único. Ouvimos, estudamos e construímos uma estratégia jurídica à medida, acompanhando de perto cada fase do processo e mantendo-o sempre informado."
            />
            <div className="mt-9">
              <Button asChild size="lg" className="bg-gold text-forest hover:bg-gold/90">
                <Link href="/consultas">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/office.jpg"
              alt="Sala de reuniões moderna de um escritório de advogados"
              width={1200}
              height={801}
              className="rounded-xl object-cover shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <CtaBanner
          title="Precisa de apoio jurídico?"
          description="Contacte-nos hoje e obtenha orientação de profissionais experientes para o seu caso."
        />
      </section>
    </>
  );
}