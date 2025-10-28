import { PrismaClient } from "../../../prisma/generated/client"

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

 export const prisma =
  global.prisma ||
  new PrismaClient({ 
    log: ["query"], // optional: logs all queries
  });

// Prevent multiple instances in development
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
