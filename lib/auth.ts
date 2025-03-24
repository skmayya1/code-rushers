import db from "@/DB";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", 
    })
});