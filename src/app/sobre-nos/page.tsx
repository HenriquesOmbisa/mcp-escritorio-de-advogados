import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história, a missão, a visão e os valores do MPC Escritório de Advogados, sociedade jurídica com prática consolidada em Luanda, Angola.",
  alternates: { canonical: "/sobre-nos" },
  openGraph: {
    title: "Sobre Nós",
    description:
      "A história, missão, visão e valores do MPC Escritório de Advogados.",
  },
};

const valores = [
  {
    icon: Target,
    titulo: "Missão",
    descricao:
      "Garantir acesso a uma advocacia de qualidade, defender com rigor os interesses dos nossos clientes e contribuir para a afirmação do Estado de Direito em Angola.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    descricao:
      "Ser reconhecido como uma das sociedades de advogados de referência em Angola, pela excelência técnica, ética profissional e resultados alcançados.",
  },
  {
    icon: HeartHandshake,
    titulo: "Valores",
    descricao:
      "Integridade, confidencialidade, lealdade ao cliente, rigor técnico e responsabilidade social orientam toda a nossa actuação profissional.",
  },
];

const equipa = [
  {
    nome: "Dr. Manuel Pedro Cabral",
    funcao: "Sócio Fundador · Direito Comercial e Fiscal",
  },
  {
    nome: "Dra. Amélia dos Santos",
    funcao: "Sócia · Direito do Trabalho",
  },
  {
    nome: "Dr. José Baptista",
    funcao: "Advogado Sénior · Direito Civil",
  },
  {
    nome: "Dra. Luísa Ngola",
    funcao: "Advogada · Direito Penal",
  },
];

export default function SobreNosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre Nós"
        title="Um escritório construído sobre a confiança"
        description="Conheça a história, os valores e a equipa que fazem do MPC Escritório de Advogados uma referência em Luanda."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="A Nossa História"
              title="Mais de 18 anos ao serviço do direito em Angola"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                O MPC Escritório de Advogados foi fundado em Luanda com o
                propósito de prestar serviços jurídicos de excelência a
                particulares e empresas. Ao longo dos anos, consolidámos uma
                prática multidisciplinar que acompanha a evolução económica e
                jurídica do país.
              </p>
              <p>
                A nossa equipa reúne advogados com formação nacional e
                internacional, capaz de responder aos desafios mais complexos em
                matéria civil, comercial, laboral, fiscal e penal.
              </p>
              <p>
                Actuamos com independência, transparência e um compromisso
                inabalável com a ética e a confidencialidade — princípios que
                orientam cada parecer, cada contrato e cada processo que nos é
                confiado.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/office.jpg"
              alt="Equipa de advogados numa sala de reuniões"
              width={1200}
              height={801}
              className="rounded-xl object-cover shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Missão, Visão e Valores"
            title="O que nos move todos os dias"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="rounded-xl border border-border/70 bg-card p-8 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-forest text-gold">
                  <v.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-forest">
                  {v.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Equipa"
          title="Os profissionais que cuidam do seu caso"
          description="Advogados dedicados, experientes e empenhados na defesa dos seus interesses."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipa.map((membro) => (
            <div
              key={membro.nome}
              className="rounded-xl border border-border/70 bg-card p-7 text-center shadow-sm transition hover:border-gold/50"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-none bg-forest text-gold">
                <Users className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-forest">
                {membro.nome}
              </h3>
              <p className="mt-1 text-sm text-gold">{membro.funcao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CtaBanner
          title="Vamos conversar sobre o seu caso?"
          description="A nossa equipa está disponível para o receber e orientar da melhor forma."
        />
      </section>
    </>
  );
}