import React, { useState } from "react";


const useForm = (initialValues: { [key: string]: string }) => {

    const [values, setValues] = useState(initialValues);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (callback: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        callback();
    }

    return { values, handleChange, handleSubmit, submitted }

}

export default useForm;