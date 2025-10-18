import { z } from "zod";

const signupSchema = z.object({
  ownerName: z
    .string({ message: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email format")
    .refine((val) => val.endsWith("@gmail.com"), {
      message: "Email must end with @gmail.com",
    }).optional(),
  age: z
    .number({ message: "Age is required" })
    .int("Age must be an integer")
    .min(18, "Age must be at least 18")
    .max(70, "Age must be less than 70"),
  mobileNumber: z
    .string({ message: "Mobile number is required" })
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  profilePhoto: z.string().optional(),
  address: z.string().optional(),
  shopName: z.string().optional(),
  gstNumber: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

export default signupSchema