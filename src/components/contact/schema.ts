import { z } from "zod";

const phoneRegex =
  /^(?:\+?[1-9]\d{1,3}[\s-]?)?(?:\(?\d{2,4}\)?[\s-]?)?\d{3,5}[\s-]?\d{4,7}$/;

export const contactSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid business email"),
  firstName: z.string().trim().min(2, "First name is too short"),
  lastName: z.string().trim().min(2, "Last name is too short"),
  jobTitle: z.string().trim().min(2, "Job title helps us tailor the demo"),
  company: z.string().trim().min(2, "Company name is required"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Please share a bit more detail (min 10 chars)"),
  website: z.string().max(0, "Bot detected"), // honeypot
});

export type ContactFormValues = z.infer<typeof contactSchema>;
