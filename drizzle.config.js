import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:Ttiz1BxQE6fl@ep-wild-glitter-a8toj6iw.eastus2.azure.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:Ttiz1BxQE6fl@ep-wild-glitter-a8toj6iw.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
