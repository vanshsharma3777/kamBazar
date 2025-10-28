import { z } from "zod";

const signupSchema = z.object({
   password: z.string().min(6, "Password must be at least 6 characters"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email format")
    .refine((val) => val.endsWith("@gmail.com"), {
      message: "Email must end with @gmail.com",
    })
});

export default signupSchema