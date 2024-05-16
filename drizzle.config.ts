import { defineConfig } from "drizzle-kit"
import "dotenv/config";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_DATABASE_CONNECTION_STRING!,
  },
  strict: true,
});