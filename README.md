# aws-seminar-full-stack-app
# Use the following script to initialize the MySQL db:
-- Create the database
CREATE DATABASE IF NOT EXISTS mydb;

-- Use the database
USE mydb;

-- Create the students table
CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(32) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (id, name) VALUES
('001', 'Alice Johnson'),
('002', 'Bob Smith'),
('003', 'Charlie Brown');

# Run the app
* Config the file `.env` following the file `env-example`
* Install dependencies: npm install
* Run the app: npm run dev