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
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                        <textarea 
                            value={field.value} 
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        />
                    </label>
                </div>
                <button 
                    onClick={() => onRemove(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                    Remove
                </button>
            </div>
        )
    }

    if(field.type === "file"){
        return(
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                        <input 
                            type="file" 
                            onChange={(e) => onUpdate(index, {
                                ...field,
                                value: e.target.files ? Array.from(e.target.files).map(file => file.name).join(",") : "",
                            })}
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                        />
                    </label>
                </div>
                <button 
                    onClick={() => onRemove(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                    Remove
                </button>
            </div>
        )
    }

    return(
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    <input 
                        type={field.type}
                        value={field.value}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </label>
            </div>
            <button 
                onClick={() => onRemove(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
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

