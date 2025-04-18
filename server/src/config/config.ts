import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Define an interface for database configurations
interface IDatabaseConfig {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: "postgres";
  };
  production: {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: "postgres";
  };
}

// Export the database configuration for different environments
export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "my_database_dev",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.PROD_DB_USER || "postgres",
    password: process.env.PROD_DB_PASSWORD || "password",
    database: process.env.PROD_DB_NAME || "my_database_prod",
    host: process.env.PROD_DB_HOST || "127.0.0.1",
    port: Number(process.env.PROD_DB_PORT) || 5432,
    dialect: "postgres",
  },
};
