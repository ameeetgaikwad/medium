import { z } from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

//type to use in frontend

export type SignupInput = z.infer<typeof signupInput>;
