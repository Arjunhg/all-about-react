import { create } from "zustand";

export type Workspace = {
    name: string;
    emoji: string;
}
export type List = {
    name: string;
    emoji: string;
}
export type Todo = {
    text: string;
    list: string;
    workspace: string;
}

type TaskStore = {
    workspaces: Workspace[];
    lists: List[];
    todos: Todo[];
    editIndex: number | null;
    editText: string;
    dropdownIndex: number | null;
    isListModalOpen: boolean;
    isWorkspaceModalOpen: boolean;
    selectedList: string;
    selectedWorkspace: string;
    todoText: string;
    modalName: string;
    modalEmoji: string;
    modalType: "List" | "Workspace" | null;

    addWorkspace: (workspace: Workspace) => void;
    addList: (list: List) => void;
    addTodo: (todo: Todo) => void;

    updateTodo: (index: number, updatedTodo: Todo) => void;
    deleteTodo: (index: number) => void;

    handleEdit: (index: number) => void;
    handleUpdate: (index: number) => void;
    handleDropdownClick: (index: number) => void;

    setEditText: (text: string) => void;
    setEditIndex: (index: number | null) => void;

    openListModal: () => void;
    closeListModal: () => void;
    openWorkspaceModal: () => void;
    closeWorkspaceModal: () => void;

    setSelectedList: (list: string) => void;
    setSelectedWorkspace: (workspace: string) => void;
    setTodoText: (text: string) => void;

    handleAddTodo: () => void;

    setModalName: (name: string) => void;
    setModalEmoji: (emoji: string) => void;
    setModalType: (type: "List" | "Workspace" | null) => void;

    handleSaveModal: () => void;
}


const useTaskStore = create<TaskStore>(set => ({
    workspaces: [],
    lists: [],
    todos: [],
    editIndex: null,
    editText: "",
    dropdownIndex: null,
    isListModalOpen: false,
    isWorkspaceModalOpen: false,
    selectedList: "",
    selectedWorkspace: "",
    todoText: "",
    modalName: "",
    modalEmoji: "",
    modalType: null,

    addWorkspace: (workspace) => set(state => ({
        workspaces: [...state.workspaces, workspace]
    })),
    addList: (list) => set(state => ({
        lists: [...state.lists, list]
    })),
    addTodo: (todo) => set(state => ({
        todos: [...state.todos, todo]
    })),

    // updateTodo: (index, updatedTodo) => set(state => ({
    //     todos: state.todos.map((todo, i) => i === index ? updatedTodo : todo)
    // })), When working with small to medium-sized arrays.
    updateTodo: (index, updatedTodo) => set(state => {
        const newTodos = [...state.todos];
        newTodos[index] = updatedTodo;
        return {
            todos: newTodos,
            editIndex: null,
            editText: ""
        }
    }),
    deleteTodo: (index) => set(state => ({
        todos: state.todos.filter((_, i) => i !== index),
        dropdownIndex: null
    })),

    handleEdit: (index) => set(state => ({
        editIndex: index,
        editText: state.todos[index].text,
        dropdownIndex: null
    })),
    handleUpdate: (index) => set(state => {
        const updatedTodo = {
            ...state.todos[index],
            text: state.editText
        };
        const newTodos = [...state.todos];
        newTodos[index] = updatedTodo;

        return{
            todos: newTodos,
            editIndex: null,
            editText: ""
        }
    }),
    handleDropdownClick: (index) => set(state => ({
        dropdownIndex: index === state.dropdownIndex ? null : index,
    })),

    setEditText: (text) => set(state => ({editText: text})),
    setEditIndex: (index) => set(state => ({editIndex: index})),

    openListModal: () => set({isListModalOpen: true, modalType: "List"}),
    closeListModal: () => set({isListModalOpen: false, modalName: "", modalEmoji: ""}),
    openWorkspaceModal: () => set(state => ({isWorkspaceModalOpen: true, modalType: "Workspace"})),
    closeWorkspaceModal: () => set(state => ({isWorkspaceModalOpen: false, modalName: "", modalEmoji: ""})),

    setSelectedList: (list) => set(state => ({selectedList: list})),
    setSelectedWorkspace: (workspace) => set(state => ({selectedWorkspace: workspace})),
    setTodoText: (text) => set(state => ({todoText: text})),

    handleAddTodo: () => set(state => {
        const { todoText, selectedList, selectedWorkspace} = state;
        if(todoText.trim() === ""){
            alert("Please enter a task.");
            return state;
        }
        const newTodo = {
            text: todoText,
            list: selectedList,
            workspace: selectedWorkspace
        };
        return {
            todos: [...state.todos, newTodo],
            todoText: "",
            selectedList: "",
            selectedWorkspace: ""
        }
    }),
    setModalName: (name) => set(state => ({modalName: name})),
    setModalEmoji: (emoji) => set(state => ({modalEmoji: emoji})),
    setModalType: (type) => set(state => ({modalType: type})),

    handleSaveModal: () =>
        set((state) => {
          const { modalName, modalEmoji, modalType } = state;
          if (modalName.trim() === "") return state;
    
          if (modalType === "List") {
            state.addList({ name: modalName, emoji: modalEmoji });
          } else if (modalType === "Workspace") {
            state.addWorkspace({ name: modalName, emoji: modalEmoji });
          }
    
          return {
            modalName: "",
            modalEmoji: "",
            modalType: null,
            isListModalOpen: false,
            isWorkspaceModalOpen: false,
          };
        }),

}))

export default useTaskStore;

/*
Hierarchical Relationship:
Workspace: A high-level project/category (e.g., "Work").
    List: A subset or context within the workspace (e.g., "Development").
        Todo: A specific task within the list (e.g., "Fix bug in login flow").
*/