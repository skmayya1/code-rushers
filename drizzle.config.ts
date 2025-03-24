import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './DB/drizzle',
  schema: './DB/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});