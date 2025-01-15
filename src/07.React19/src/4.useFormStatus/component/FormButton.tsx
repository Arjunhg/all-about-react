import { useFormStatus } from "react-dom";

const FormButton = () => {

    const { pending }  = useFormStatus();
    console.log(useFormStatus());

    return(
        <button type="submit" disabled={pending} className="bg-black rounded text-white px-4 py-2 mt-3">
            {
                pending ? "Submitting..." : "Submit"
            }
        </button>
    )
}

export default FormButton;