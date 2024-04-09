import express, {Request, Response} from 'express';
import * as StudentService from "../services/StudentService";
import { Student, BaseStudent } from '../models/Student';
import * as StudentController from "../controllers/StudentController";

export const StudentRouter = express.Router();

// get all students
StudentRouter.get("/api/students", StudentController.getAllStudents);

// get student by id
StudentRouter.get("/api/student/:id", StudentController.getStudent);

// add new student
StudentRouter.post("/api/student", StudentController.addStudent);

// update student
StudentRouter.put("/api/student/:id", StudentController.updateStudent);

// remove student
StudentRouter.delete("/api/student/:id", StudentController.removeStudent);
