import { Pool } from "pg";

const DB_URI = process.env.DB_URI;

if (!DB_URI) throw new Error("Missing required env DB_URI");

const db: Pool = new Pool({
  connectionString: DB_URI,
});

export async function InitDB() {
  try {
    await db.connect();
    if (db) {
      console.log("[DATABASE] Database connected!");
      return;
    }
  } catch (err) {
    console.error("[ERROR] ", err);
  }
}

export const query: Pool["query"] = async (args: any) => db.query(args);

export default db;
