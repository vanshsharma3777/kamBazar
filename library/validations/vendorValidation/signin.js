import { z } from "zod";

const signinSchema = z.object({
  ownerName: z
    .string({ message: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  mobileNumber: z
    .string({ message: "Mobile number is required" })
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
});

export default signinSchema