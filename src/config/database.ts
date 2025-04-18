import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "./config";

// Get the current environment (default to 'development')
const env = process.env.NODE_ENV || "development";

// Select the correct database configuration
const config = databaseConfig[env as keyof typeof databaseConfig];

// Initialize Sequelize using the selected configuration
export const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  models: [__dirname + "/models"], // Load models
});

// Function to connect to the database
 const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Connected to the ${env} database successfully.`);
    
    // Sync models with the database
    await sequelize.sync();
    console.log("✅ Database tables synchronized.");
    
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

export default connectDB;