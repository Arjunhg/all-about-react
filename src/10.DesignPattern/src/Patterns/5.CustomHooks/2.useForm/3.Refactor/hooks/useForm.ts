import { useState } from "react";

// interface Validator = (value: string) => string | undefined;
type Validator = (value: string) => string | undefined;

interface UseFormProps {
    initialValues: { [key: string]: string };
    validate: { [key: string]: Validator }
}

const useForm = ( {initialValues, validate } : UseFormProps) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setError] = useState<{ [key: string]: string | undefined }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }))

        if(errors[name]){
            setError(prev => ({
                ...prev,
                [name]: undefined
            }))
        }
    }

    const validateForm = () => {
        let isValid = true;

        const newErrors: {
            [key: string]: string | undefined
        } = {};

        for(const field in validate){
            const error = validate[field](values[field]);
            if(error){
                isValid = false;
                newErrors[field] = error;
            }
        }

        setError(newErrors);
        return isValid;
    }

    const handleSubmit = (callback: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(validateForm()){
            setSubmitted(true);
            callback();
        }
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     if(validateForm()){
    //         setSubmitted(true);
    //     }
    // }

    return { values, errors, handleChange, handleSubmit, submitted }

}

export default useForm;