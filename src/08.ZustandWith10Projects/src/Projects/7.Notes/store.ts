import { create } from "zustand";

export type Note = {
    text: string;
    color: string;
}

type NotesStore = {
    notes: Note[];
    search: string;
    editorContent: string;
    noteColor: string;
    currentNoteIndex: number | null;
    setNotes: (updatedNotes: Note[]) => void;
    setSearch: (searchValue: string) => void;
    setEditorContent: (content: string) => void;
    setNoteColor: (color: string) => void;
    setCurrentNoteIndex: (index: number | null) => void;
    addOrUpdateNote: () => void;
    selectNote: (index: number) => void;
}

const useNoteStore = create<NotesStore>(set => ({
    notes: [],
    search: "",
    editorContent: "",
    noteColor: "#ffffff",
    currentNoteIndex: null,

    setNotes: (updatedNotes) => set(() => ({
        notes: updatedNotes
    })),
    setSearch: (searchValue) => set(() => ({
        search: searchValue
    })),
    setEditorContent: (content) => set(() => ({
        editorContent: content
    })),
    setNoteColor: (color) => set(() => ({
        noteColor: color
    })),
    setCurrentNoteIndex: (index) => set(() => ({
        currentNoteIndex: index
    })),

    // addOrUpdateNote: () => set(state => ({
    //     const {editorContent, noteColor, currentNoteIndex, notes} = state;
    // })),
    addOrUpdateNote: () => set(state => {
        const { editorContent, noteColor, currentNoteIndex, notes } = state;
        
        // If content is empty, return current state unchanged
        if (!editorContent.trim()) {
            return state;
        }
    
        if (currentNoteIndex !== null) {
            // Update existing note
            const updatedNotes = [...notes];
            updatedNotes[currentNoteIndex] = {
                text: editorContent,
                color: noteColor
            };
            return {
                notes: updatedNotes,
                editorContent: "",
                noteColor: "#ffffff",
                currentNoteIndex: null,
            };
        }
        
        // Add new note
        return {
            notes: [...notes, { text: editorContent, color: noteColor }],
            editorContent: "",
            noteColor: "#ffffff",
            currentNoteIndex: null,
        };
    }),
    selectNote: (index) => set((state) => ({
        editorContent: state.notes[index].text,
        noteColor: state.notes[index].color,
        currentNoteIndex: index
    }))
}))

// const { editorContent, noteColor, currentNoteIndex, notes } = NotesStore; NotesStore is a type: It only exists in the TypeScript type system for compile-time checks and doesn’t have runtime value.
        // we need to extract these values from the Zustand store's state, not the type.

export default useNoteStore;