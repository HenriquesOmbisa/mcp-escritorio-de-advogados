import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Estátua da justiça com balança da justiça em fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover contrast-110 saturate-110"
        />
        <div
          className="absolute inset-0 bg-forest/50"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium text-gold [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            <ShieldCheck className="size-5" aria-hidden="true" />
            Sociedade de Advogados · Luanda, Angola
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            Justiça com rigor,{" "}
            <span className="text-gold">confiança</span> e excelência
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white [text-shadow:0_1px_16px_rgba(0,0,0,0.6)]">
            O {SITE_NAME} presta assessoria e representação jurídica em
            múltiplas áreas do direito, com uma equipa dedicada ao sucesso e à
            protecção dos interesses dos seus clientes em Angola.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gold text-forest hover:bg-gold/90">
              <Link href="/consultas">
                Marcar uma Consulta
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/areas-de-actuacao">Áreas de Actuação</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}