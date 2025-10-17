import { z } from "zod";

const signupSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  mobileNumber: z
    .string({ message: "Mobile number is required" })
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  age: z
    .number({ message: "Age is required" })
    .int("Age must be an integer")
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than 120"),
});

export default signupSchema