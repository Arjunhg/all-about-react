import { useForm, SubmitHandler } from "react-hook-form";

interface FormData{
    name: string;
    email: string;
    password: string;
}

const SimpleForm = () => {

    // register:  is used to connect input fields to the form.
    // handleSubmit:  is a function to handle form submission.
    // errors:  contains validation errors for the form.

    const { register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }

    return(

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="name" {...register("name", {required: "Name is required"})} />

                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }

                
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Email" id="email" {...register("email", {
                    required: "Email is required",
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}/>
                {
                    errors.email && (
                        <p style={{color:"red"}}>{errors.email.message}</p>
                    )
                }
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="Password" {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8, 
                        message: "Password must be at least 8 characters long"
                    }
                })}/>
                {
                    errors.password && (
                        <p style={{color:"red"}}>{errors.password.message}</p>
                    )
                }
            </div>
            {/* <button type="submit">Submit</button> */}

            <button disabled={isSubmitting}>
                {
                    isSubmitting ? 'Loading...' : 'Submit'
                }
            </button>
        </form>
    )
}

export default SimpleForm


/*Without 
  
import React, { useState } from "react";

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const validate = () => {
        const newErrors = {
            name: "",
            email: "",
            password: ""
        };

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        setErrors(newErrors);

        // Check if there are any validation errors
        return !Object.values(newErrors).some((error) => error !== "");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate a submit process
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    );
};

export default SimpleForm;


*/