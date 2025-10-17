"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const index_js_1 = require("../../../app/generated/prisma/index.js");
exports.prisma = global.prisma ||
    new index_js_1.PrismaClient({
        log: ["query"], // optional: logs all queries
    });
// Prevent multiple instances in development
if (process.env.NODE_ENV !== "production")
    global.prisma = exports.prisma;
//# sourceMappingURL=index.js.map