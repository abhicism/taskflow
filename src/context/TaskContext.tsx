import {
    createContext, // Creates shared context
    useReducer   // Manages task state
} from "react";

import type { ReactNode } from "react";
import type { Task } from "../types/Task";

// Defines the actions that can change tasks
type TaskAction =
    | { type: "add"; title: string }
    | { type: "toggle"; id: number }
    | { type: "delete"; id: number };

// Updates the task list based on the action
function taskReducer(
    tasks: Task[],
    action: TaskAction
): Task[] {
    switch (action.type) {
        case "add":
            // Create a new task and add it to the list
            return [
                ...tasks,
                {
                    id: Date.now(),
                    title: action.title,
                    completed: false
                }
            ];

        case "toggle":
            // Toggle the completed status of the matching task
            return tasks.map((task) =>
                task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task
            );

        case "delete":
            // Remove the task with the matching ID
            return tasks.filter(
                (task) => task.id !== action.id
            );

        default:
            // Keep the current list if no action matches
            return tasks;
    }
}

// Defines the data and functions shared with components
type TaskContextType = {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
};

// Creates the context
const TaskContext = createContext<TaskContextType | null>(null);

// Makes task data available to child components
export function TaskProvider({
    children
}: {
    children: ReactNode;
}) {
    // Stores tasks and updates them through the reducer
    const [tasks, dispatch] = useReducer(taskReducer, []);

    // Adds a task by dispatching an add action
    function addTask(title: string) {
        dispatch({ type: "add", title });
    }

    // Toggles a task by dispatching a toggle action
    function toggleTask(id: number) {
        dispatch({ type: "toggle", id });
    }

    // Deletes a task by dispatching a delete action
    function deleteTask(id: number) {
        dispatch({ type: "delete", id });
    }

    return (
        // Shares tasks and actions with child components
        <TaskContext.Provider
            value={{ tasks, addTask, toggleTask, deleteTask }}
        >
            {children}
        </TaskContext.Provider>
    );
}

//taskReducer is a function that updates the task list based on the action received.
//The purpose of the context/ folder in your TaskFlow project is to manage and share data across components.

export { TaskContext };
