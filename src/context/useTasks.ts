import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// Custom hook for accessing the shared task context
export function useTasks() {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used inside TaskProvider");
    }

    return context;
}
