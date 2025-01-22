import type { FormFieldTypes } from "../store";

type FormFieldProps = {
    field: FormFieldTypes,
    index: number,
    onUpdate: (index: number, updatedField: FormFieldTypes) => void,
    onRemove: (index: number) => void
}

const FormField: React.FC<FormFieldProps> = ( {field, index, onUpdate, onRemove} ) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        onUpdate(index, { ...field, value: e.target.value});
    };

    if(field.type === "textarea"){
        return (
            <div>
                <label>
                    {field.label}
                    <textarea value={field.value} onChange={handleChange}/>
                </label>
                <button onClick={() => onRemove(index)}>
                    Remove
                </button>
            </div>
        )
    }

    if(field.type === "file"){
        return(
            <div>
                <label>
                    {field.label}
                    <input 
                        type="file" 
                        onChange={(e) => onUpdate(index, {
                            ...field,
                            value: e.target.files ? Array.from(e.target.files).map(file => file.name).join(",") : "",
                        })}
                    />
                </label>
                <button onClick={() => onRemove(index)}>
                    Remove
                </button>
            </div>
        )
    }

    return(
        <div>
            <label>
                {field.label}
                <input 
                    type={field.type}
                    value={field.value}
                    onChange={handleChange} 
                />
            </label>
            <button onClick={() => onRemove(index)}>
                Remove
            </button>
        </div>
    )
}

export default FormField;


/*

FileList{
    0: File {name: "report.pdf", size: 25000, typr: "application/pdf"}
    1: File {name: "image.jpg", size: 1000, type: "image/jpeg"}
}

Array.From(e.target.files)
[
    File {name: "report.pdf", size: 25000, typr: "application/pdf"},
    File {name: "image.jpg", size: 1000, type: "image/jpeg"}
]

map(file => file.name)
[
    "report.pdf","image.jpg"
]

join(",")
"report.pdf,image.jpg"

*/

