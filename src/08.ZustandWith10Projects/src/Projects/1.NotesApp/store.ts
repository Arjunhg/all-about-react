import { create } from "zustand";

interface Note{
    id: number;
    title: string;
    content: string;
}

interface NotesStore{
    notes: Note[];
    addNote: (note: Note) => void;
    updateNote: (id: number, updatedNote: Partial<Note>) => void; //void means it doesn't return anything; it just updates the state
    deleteNote: (id: number) => void;
}

const useStore = create<NotesStore>((set) => ({

    notes: [],
    addNote: (note) => set(state => ({
        notes: [...state.notes, note]
    })),
    updateNote: (id, updatedNote) => set(state => ({
        notes: state.notes.map(note => note.id === id ? {...note, ...updatedNote} : note) 
    })),
    deleteNote: (id) => set(state => ({
        notes: state.notes.filter(note => note.id !== id)
    }))

}));

export default useStore;