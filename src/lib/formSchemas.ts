import { z } from "zod";

export const courseFormSchema = z.object({
  courseId: z.string(),
  title: z.string(),
  headline: z.string(),
  description: z.string(),
  logo_url: z.string().url(),
  thumbnail: z.string().url(),
  is_paid: z.boolean().default(false).optional(),
  price: z.string(),
  price_detail: z.object({
    amount: z.number(),
    currency: z.string(),
    price_string: z.string(),
    currency_symbol: z.string(),
  }),
  language: z.array(z.string()),
  instructor: z.object({
    name: z.string(),
    designation: z.string(),
    image: z.string().url(),
  }),
  total_modules: z.number().int(),
  total_time: z.number().int(),
  ratings: z.object({
    rating_count: z.number().int(),
    average_rating: z.number(),
  }),
  requirements: z.array(z.string()),
  skills: z.array(z.string()),
  skillInput: z.string(),
  categories: z.array(z.string()),
  categoryInput: z.string(),
  course_content_id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
