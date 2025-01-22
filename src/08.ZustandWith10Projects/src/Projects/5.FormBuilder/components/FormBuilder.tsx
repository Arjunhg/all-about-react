import { ChangeEvent, useState } from "react";
import type { FormFieldTypes } from "../store";
import useFormStore from "../store";
import FormField from "./FormField";

const FormBuilder = () => {

  const { formFields, addField, removeField, updateField, resetForm } = useFormStore();

  const [newField, setNewField] = useState<FormFieldTypes>({
    label: "",
    type: "text",
    value: "",
  })

  const handleAddField = () => {
    addField(newField);
    setNewField({label: "", type: "text", value: ""});
  }

  const handleRemoveField = (index: number) => {
    removeField(index);
  }

  const handleUpdateField = (index: number, updatedField: FormFieldTypes) => {
    updateField(index, updatedField);
  }

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewField(prev => ({...prev, [name]: value}));
  }

  return(
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Form Builder</h1>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1">
            <input 
              type="text" 
              name="label"
              placeholder="Field Label"
              value={newField.label}
              onChange={handleFieldChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-48">
            <select 
              name="type" 
              value={newField.type} 
              onChange={handleFieldChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="password">Password</option>
              <option value="textarea">Textarea</option>
              <option value="date">Date</option>
              <option value="file">File</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button 
              type="button" 
              onClick={handleAddField}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Field
            </button>
            <button 
              type="button" 
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Reset Form
            </button>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            index={index}
            onUpdate={handleUpdateField}
            onRemove={handleRemoveField}
          />
        ))}
      </form>
    </div>
  )
}

export default FormBuilder;
