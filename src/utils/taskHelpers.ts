import type { Task } from "../types/Task";

// Returns only completed tasks
export function getCompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.completed);
}

// Returns only incomplete tasks
export function getActiveTasks(tasks: Task[]): Task[] {
    return tasks.filter((task) => !task.completed);
}

// Counts all tasks
export function getTotalTasks(tasks: Task[]): number {
    return tasks.length;
}

//The purpose of the utils/ folder is to store reusable helper functions.
//the file contains functions that process task data without managing react state


//why use utils folder
//reuse the same logic in multiple components without duplicating code
//keep components clean and simple 
//avoid repetitive code in components, making them easier to read and maintain