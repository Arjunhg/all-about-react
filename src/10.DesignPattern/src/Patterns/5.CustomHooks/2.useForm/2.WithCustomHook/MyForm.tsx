import useForm from "./hooks/useForm";

const MyForm = () => {

    const { values, handleChange, handleSubmit, submitted } = useForm({
        name: "",
        email: ""
    });

    const onSubmit = () => {
        confirm(`Name: ${values.name}, Email: ${values.email}`);
    }

   return(
    <div>
    {
        submitted ? (
            <h2>Thank you for submitting your information!</h2>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={values.name} onChange={handleChange} name="name" />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input type="text" value={values.email} onChange={handleChange} name="email" />
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
</div>
   )

}

export default MyForm;