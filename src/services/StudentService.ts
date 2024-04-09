import express from "express";
import { Student, BaseStudent } from "../models/Student";
import { Students } from "../models/Students";

let students: Students = {
    1: {
        id: 1,
        name: "Jacob",
        rank: 1,
        state: "AP"
    },
    2: {
        id: 2,
        name: "Antony",
        rank: 2,
        state: "Kerala"
    }
}

// functions

// get all students
export const getAllStudents = async (): Promise<Student[]> => {
    console.log("get all students service function")
    return Object.values(students);
}

// get student by id
export const getStudent = async (id: number): Promise<Student | null> => {
    console.log("get student by id service function")
    const student: Student = students[id];
    if(!student) {
        console.log("Student not found");
        return null;
    } else {
        return student;
    }
}


// add new student
export const addStudent = async (newStudent: BaseStudent): Promise<Student> => {
    console.log("add student service function")
    const id = new Date().valueOf();
    const student: Student = {
        id,
        ...newStudent
    };
    students[id] = student;
    return student;
}

// update student
export const updateStudent = async (id: number, updateData: BaseStudent): Promise<Student | null> => {
    let student: Student | null = await getStudent(id);
    if(!student) {
        console.log("Student not found to update!");
        return null;
    } else {
        student = {
            id,
            ...updateData
        };
        students[id] = student;
        return student;
    }
}

// remove student
export const removeStudent = async (id: number): Promise<void | null> => {
    console.log("remove student service function")
    const student: Student | null = await getStudent(id);
    if(!student) {
        console.log("Student not found to remove");
        return null;
    } else {
        delete students[id];
    }
}

