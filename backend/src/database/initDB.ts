import { config } from "dotenv";
import { Pool } from "pg";
config({ quiet: true });

const DB_URI = process.env.DB_URI;

if (!DB_URI) throw new Error("Missing required env DB_URI");

const db: Pool = new Pool({
  connectionString: DB_URI,
});

export async function InitDB() {
  try {
    await db.query("select now()");
    if (db) {
      console.log("[DATABASE] Database connected!");
      return;
    }
  } catch (err) {
    console.error("[DATABASE] connection failed", err);
  }
}

export const query = ((...args: any[]) => (db.query as any)(...args)) as Pool["query"];

export default db;
