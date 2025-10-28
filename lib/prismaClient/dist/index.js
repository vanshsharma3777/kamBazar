"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("../../../prisma/generated/client");
exports.prisma = global.prisma ||
    new client_1.PrismaClient({
        log: ["query"], // optional: logs all queries
    });
// Prevent multiple instances in development
if (process.env.NODE_ENV !== "production")
    global.prisma = exports.prisma;
//# sourceMappingURL=index.js.map