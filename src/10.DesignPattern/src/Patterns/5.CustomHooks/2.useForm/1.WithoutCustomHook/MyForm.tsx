import React, { useState } from 'react';

const MyForm = () => {

    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        confirm(`Name: ${name}, Age: ${age}`);
    }

    return(
        <div>
            {
                submitted ? (
                    <h2>Thank You for submitting your information!</h2>
                ) : (
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>
                                Name:
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Age:
                                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}/>
                            </label>
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                )
            }
        </div>
    )

}

export default MyForm;