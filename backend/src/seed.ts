import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const seedDatabase = async () => {
  try {
    // Create a connection to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    });

    console.log("Connected to MySQL Server...");

    // Create Database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await connection.query(`USE ${process.env.DB_NAME}`);

    console.log(`Using Database: ${process.env.DB_NAME}`);

    // Create Students Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id VARCHAR(32) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Students table is ready...");

    // Insert Sample Data
    const sampleStudents = [
      ["001", "Alice Johnson"],
      ["002", "Bob Smith"],
      ["003", "Charlie Brown"],
      ["004", "Diana Prince"],
      ["005", "Ethan Williams"],
    ];

    for (const [id, name] of sampleStudents) {
      await connection.query(
        `INSERT INTO students (id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name=name`,
        [id, name]
      );
    }

    console.log("Sample student data inserted.");

    // Close the connection
    await connection.end();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Run the function
seedDatabase();
