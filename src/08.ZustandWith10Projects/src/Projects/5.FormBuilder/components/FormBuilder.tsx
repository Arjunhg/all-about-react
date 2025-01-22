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
    <div>
      <h1>Form Builder</h1>
      <div>
        <input 
          type="text" 
          name="label"
          placeholder="Field Label"
          value={newField.label}
          onChange={handleFieldChange}
        />
        <select name="type" value={newField.type} onChange={handleFieldChange}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>

        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>

      </div>
      <form>
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
