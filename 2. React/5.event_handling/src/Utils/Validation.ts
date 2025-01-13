import { IStudent } from "./Type.ts";

export const Validation = (student: IStudent) => {
    const errors:string[] = [];
    if(student.name.length < 3){
        errors.push("Name must be more than 2 characters");
    }
    if(student.age  <= 18){
        errors.push("age must be more than 18");
    }
    if(student.courses.length < 1){
        errors.push("You should have one course at least");
    }
    return errors;
}