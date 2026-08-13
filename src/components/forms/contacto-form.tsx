"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactoSchema, type ContactoInput } from "@/lib/validations";

export function ContactoForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactoInput>({
    resolver: zodResolver(contactoSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    },
  });

  const { isSubmitting } = form.formState;

  function onSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-gold/40 bg-card px-5 py-10 text-center shadow-sm sm:p-10">
        <span className="flex size-14 items-center justify-center rounded-none bg-forest">
          <CheckCircle2 className="size-8 text-gold" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-heading text-2xl font-bold text-forest">
          Mensagem enviada
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Obrigado pelo seu contacto. A nossa equipa responderá o mais
          brevemente possível.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 w-full sm:w-auto"
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
        >
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 rounded-xl border border-border/70 bg-card p-6 shadow-sm sm:p-8"
        noValidate
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="O seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@exemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="+244 923 456 789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assunto</FormLabel>
                <FormControl>
                  <Input placeholder="Assunto da mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Escreva a sua mensagem…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-forest text-white hover:bg-forest-light sm:w-auto"
        >
          {isSubmitting && (
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          Enviar mensagem
        </Button>
      </form>
    </Form>
  );
}