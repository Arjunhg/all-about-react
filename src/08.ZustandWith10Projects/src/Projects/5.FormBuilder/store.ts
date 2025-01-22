import { create } from "zustand";

export type FormFieldTypes = {
    label: string;
    type: "text" | "number" | "email" | "textarea" | "date" | "file";
    value: string;
}
type FormFieldStore = {
    formFields: FormFieldTypes[];
    addField: (field: FormFieldTypes) => void;
    removeField: (index: number) => void;
    updateField: (index: number, updatedField: FormFieldTypes) => void;
    resetForm: () => void;
}

const useFormStore = create<FormFieldStore>( set => ({
    formFields: [],
    addField: (field) => set(state => ({
        formFields: [...state.formFields, field],
    })),
    removeField: (index) => set(state => ({
        formFields: state.formFields.filter((_, i) => i !== index),
    })),
    updateField: (index, updateField) => set(state => ({
        formFields: state.formFields.map((field, i) => i === index ? updateField : field),
    })),
    resetForm: () => set(() => ({formFields: []}))
}));

export default useFormStore;



/**useState
 import { useState } from "react";

type FormField = {
    label: string;
    type: "text" | "number" | "email" | "textarea" | "data" | "file";
    value: string;
};

type FormStore = {
    formFields: FormField[];
    addField: (field: FormField) => void;
    removeField: (index: number) => void;
    updateField: (index: number, updatedField: FormField) => void;
    resetForm: () => void;
};

const useFormStore = (): FormStore => {
    const [formFields, setFormFields] = useState<FormField[]>([]);

    const addField = (field: FormField) => {
        setFormFields(prevFields => [...prevFields, field]);
    };

    const removeField = (index: number) => {
        setFormFields(prevFields => prevFields.filter((_, i) => i !== index));
    };

    const updateField = (index: number, updatedField: FormField) => {
        setFormFields(prevFields =>
            prevFields.map((field, i) => (i === index ? updatedField : field))
        );
    };

    const resetForm = () => {
        setFormFields([]);
    };

    return {
        formFields,
        addField,
        removeField,
        updateField,
        resetForm,
    };
};

export default useFormStore;

 */