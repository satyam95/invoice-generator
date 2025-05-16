import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";


if (process.env.NODE_ENV === "development") {
  config({ path: ".env" });
}

const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle(sql);
