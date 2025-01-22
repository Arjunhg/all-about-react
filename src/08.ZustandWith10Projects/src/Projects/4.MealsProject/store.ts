import { create } from "zustand";

interface Meal{
    id: number;
    strMeal: string;
    strMealThumb: string;
}

interface MealsStore{
    meals: Meal[];
    searchQuery: string;
    setMeals: (meals: Meal[]) => void; //replace all meals
    // addMeals: (meal: Meal) => void; //add single meal
    setSearchQuery: (query: string) => void;
}

const useMealsStore = create<MealsStore>(set => ({
    meals: [],
    searchQuery: "",
    setMeals: (meals: Meal[]) => set({meals}),
    // addMeal: (meal) => set(state => ({                          // Add
    //     meals: [...state.meals, meal]
    // })),
    setSearchQuery: (query: string) => set({searchQuery: query}),
}));

export default useMealsStore;