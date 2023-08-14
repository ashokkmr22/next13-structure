import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as auth from "./schema/auth";
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect();

export const db = drizzle(client,  { schema: {...auth} });