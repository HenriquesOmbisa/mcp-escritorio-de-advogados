import { z } from "zod";

export const consultaSchema = z.object({
  nome: z
    .string()
    .min(3, "Indique o seu nome completo (mínimo 3 caracteres).")
    .max(120, "O nome não pode exceder 120 caracteres."),
  email: z
    .string()
    .min(1, "O email é obrigatório.")
    .email("Introduza um endereço de email válido."),
  telefone: z
    .string()
    .regex(
      /^\+?[0-9\s-]{9,20}$/,
      "Introduza um número de telefone válido (ex.: +244 923 456 789)."
    ),
  area: z.string().min(1, "Seleccione a área de direito relacionada."),
  modalidade: z.enum(["presencial", "online", "whatsapp"], {
    message: "Seleccione a modalidade de consulta.",
  }),
  urgencia: z.enum(["baixa", "media", "alta"], {
    message: "Seleccione o grau de urgência.",
  }),
  descricao: z
    .string()
    .min(20, "Descreva o seu caso com pelo menos 20 caracteres.")
    .max(2000, "A descrição não pode exceder 2000 caracteres."),
  autorizacao: z.boolean().refine((v) => v === true, {
    message: "É necessário autorizar o contacto por parte do escritório.",
  }),
});

export type ConsultaInput = z.infer<typeof consultaSchema>;

export const contactoSchema = z.object({
  nome: z
    .string()
    .min(3, "Indique o seu nome completo (mínimo 3 caracteres).")
    .max(120, "O nome não pode exceder 120 caracteres."),
  email: z
    .string()
    .min(1, "O email é obrigatório.")
    .email("Introduza um endereço de email válido."),
  telefone: z
    .string()
    .regex(
      /^\+?[0-9\s-]{9,20}$/,
      "Introduza um número de telefone válido (ex.: +244 923 456 789)."
    )
    .optional()
    .or(z.literal("")),
  assunto: z
    .string()
    .min(3, "Indique o assunto da mensagem.")
    .max(160, "O assunto não pode exceder 160 caracteres."),
  mensagem: z
    .string()
    .min(20, "Escreva a sua mensagem com pelo menos 20 caracteres.")
    .max(3000, "A mensagem não pode exceder 3000 caracteres."),
});

export type ContactoInput = z.infer<typeof contactoSchema>;
