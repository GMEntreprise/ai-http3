import "dotenv/config";
import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon('postgresql://neondb_owner:Ttiz1BxQE6fl@ep-wild-glitter-a8toj6iw.eastus2.azure.neon.tech/neondb?sslmode=require')

export const db = drizzle(sql, { schema });
