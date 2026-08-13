"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { consultaSchema, type ConsultaInput } from "@/lib/validations";
import { AREAS_DE_ACTUACAO } from "@/lib/constants";

const urgencias = [
  { value: "baixa", label: "Baixa" },
  { value: "media", label: "Média" },
  { value: "alta", label: "Alta" },
] as const;

const modalidades = [
  { value: "presencial", label: "Presencial", descricao: "Atendimento no escritório" },
  { value: "online", label: "Online", descricao: "Google Meet ou Zoom" },
  { value: "whatsapp", label: "WhatsApp", descricao: "Para clientes fora da cidade ou do país" },
] as const;

export function ConsultaForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ConsultaInput>({
    resolver: zodResolver(consultaSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      area: "",
      modalidade: "online",
      urgencia: "media",
      descricao: "",
      autorizacao: false,
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
          Pedido de consulta recebido
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Obrigado pelo seu contacto. A nossa equipa analisará o seu pedido e
          responderá em breve através dos contactos indicados. Caso a urgência
          seja elevada, ligue-nos para{" "}
          <a
            href="tel:+244923456789"
            className="font-medium text-forest underline underline-offset-4"
          >
            +244 923 456 789
          </a>
          .
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
          Enviar novo pedido
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
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="+244 923 456 789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área de direito</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger aria-label="Área de direito">
                      <SelectValue placeholder="Seleccione a área" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {AREAS_DE_ACTUACAO.map((area) => (
                      <SelectItem key={area.slug} value={area.titulo}>
                        {area.titulo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="modalidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modalidade da consulta</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label="Modalidade da consulta">
                    <SelectValue placeholder="Seleccione a modalidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {modalidades.map((m) => (
                    <SelectItem key={m.value} value={m.value}>
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Presencial no escritório, online via Google Meet/Zoom ou por
                WhatsApp.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urgencia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Urgência</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label="Urgência">
                    <SelectValue placeholder="Seleccione a urgência" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {urgencias.map((u) => (
                    <SelectItem key={u.value} value={u.value}>
                      {u.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Indique a urgência com que pretende ser contactado.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do caso</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Descreva, de forma sucinta, a situação para a qual procura apoio jurídico…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="autorizacao"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-label="Autorizar contacto"
                />
              </FormControl>
              <div className="space-y-1">
                <FormLabel>
                  Autorizo o MPC Escritório de Advogados a contactar-me sobre
                  este pedido.
                </FormLabel>
                <FormMessage />
              </div>
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
          Enviar pedido de consulta
        </Button>
      </form>
    </Form>
  );
}