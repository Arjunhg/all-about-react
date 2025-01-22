import { create } from "zustand";

type CounterStore = {
    count: number;
    incr: () => void;
    decr: () => void;
}

// export default function useCounterStore(){

// }

export const useCounterStore = create<CounterStore>(set => ({
    count: 0,
    incr: () => set(state => ({count: state.count + 1})),
    decr: () => set(state => ({count: state.count - 1}))
}))

// create(() => {}) takes a callback function