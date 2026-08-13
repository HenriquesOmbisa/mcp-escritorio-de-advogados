"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

type CtaBannerProps = {
  title: string;
  description?: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-forest px-6 py-14 text-center sm:px-12"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/bg-image.png)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-transparent" aria-hidden="true" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-white/75">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-forest hover:bg-gold/90">
              <Link href="/consultas">
                Marcar Consulta
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                <PhoneCall className="mr-2 size-4" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
