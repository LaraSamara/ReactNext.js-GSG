import { useEffect, useState } from "react";
import { IStudent } from "../types.ts";
import { validateStudent } from "../utils/validation.ts";

const useFormHook = (onSubmit: (std: IStudent) => void) => {
    const INITIAL_STUDENT = { age: 0, coursesList: [], id: '', isGraduated: false, name: '', absents: 0 };
    const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
    const [isOpen, setIsOpen] = useState(true);
    const [errorsList, setErrorsList] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        console.log("Hello from Add Form component!");
    }, []);
    const handleChange = (field: string, value: any) => {
        setStudent({ ...student, [field]: value });
    }
    const handleSubmit = () => {
        const newStudent: IStudent = { ...student, id: Date.now().toString() };
        const errors = validateStudent(newStudent);
        if (errors.length > 0) {
            setErrorsList(errors);
        } else {
            setErrorsList([]);
            onSubmit(newStudent);
            handleClear();
            setMessage('Student Added Successfully');
            setTimeout(() => {
            }, 1500);
        }
    }
    const handleClear = () => {
        setStudent(INITIAL_STUDENT);
    }
    const handleCoursesChange = (list: string[]) => {
        setStudent({ ...student, coursesList: list });
    }
    return{
        student,
        message,
        isOpen,
        errorsList,
        setIsOpen,
        handleChange,
        handleSubmit,
        handleClear,
        handleCoursesChange,
    }
}
export default useFormHook;