import express, {Request, Response} from "express";
import { Student, BaseStudent } from "../models/Student";
import * as StudentService from "../services/StudentService";

// get all students
export const getAllStudents = async (req: Request, res: Response) => {
    console.log("get all students controller function")
    const students: Student[] = await StudentService.getAllStudents();
    res.status(200).json(students);
}

// get student by id
export const getStudent = async (req: Request, res: Response) => {
    console.log("get student by id controller function")
    const id = parseInt(req.params.id);
    const student: Student | null = await StudentService.getStudent(id);
    if(!student) {
        res.status(500).json({message: "Student not found with given id"});
    } else {
        res.status(200).json(student);
    }
}

// add new student
export const addStudent = async (req: Request, res: Response) => {
    console.log("add student controller function");
    const newStudent: BaseStudent = req.body;
    const student: Student = await StudentService.addStudent(newStudent);
    res.status(200).json(student);
}

// update student
export const updateStudent = async (req: Request, res: Response) => {
    console.log("update student controller function");
    const id: number = parseInt(req.params.id);
    const updateData: BaseStudent = req.body;
    const student: Student | null = await StudentService.updateStudent(id, updateData);
    if(!student) {
        res.status(500).json({
            message: "Student not found by id to update"
        })
    }
    res.status(200).json(student);
}

// remove student
export const removeStudent = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    await StudentService.removeStudent(id);
    res.status(200).json({
        message: "Student removed success"
    });
}