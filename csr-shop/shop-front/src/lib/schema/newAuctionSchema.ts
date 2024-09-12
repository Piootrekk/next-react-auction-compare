import { z } from "zod";

const newAuctionSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z
    .string()
    .max(60, { message: "Description must be at most 60 characters long" })
    .nullable(),
  startingPrice: z
    .number()
    .min(0.01, { message: "Starting price must be at least 0.01" }),
  intetvalPrice: z
    .number()
    .min(0.01, { message: "Interval price must be at least 0.01" }),
  image: z
    .instanceof(File)
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "File must be a JPEG or PNG image",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must be less than 5MB",
    }),
  endsAt: z
    .string()
    .datetime({ offset: true })
    .refine(
      (date) => {
        return date > new Date().toISOString();
      },
      { message: "End date must be in the future" }
    ),
});

type TNewAuctionSchema = z.infer<typeof newAuctionSchema>;

export { newAuctionSchema };
export type { TNewAuctionSchema };
