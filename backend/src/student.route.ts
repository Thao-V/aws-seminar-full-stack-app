import {Router, Request, Response } from 'express';
import pool from "./db";

const router = Router();

// Get all students
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving students" });
  }
});

// Add a student
router.post("/", async (req: Request, res: Response) => {
  const { id, name } = req.body;
  if (!id || !name) {
    res.status(400).json({ message: "ID and name required" });
  }
  else{
    try {
      await pool.query("INSERT INTO students (id, name) VALUES (?, ?)", [id, name]);
      res.status(201).json({ message: "Student added" });
    } catch (error) {
      res.status(500).json({ message: "Error adding student" });
    }
  }
  
})

// Delete a student
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM students WHERE id = ?", [id]);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student" });
  }
});

export default router;
