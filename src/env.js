"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NEXT_PUBLIC_API_BASE_URL: zod_1.z.string().url(),
    APP_URL: zod_1.z.string().url(),
});
const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error('Invalid environment variables', parsedEnv.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables.');
}
exports.env = parsedEnv.data;
