// Import the useTasks hook from TaskContext
import { useTasks as useTaskContext } from "../context/useTasks";

// Export a custom hook for components to access task data
export function useTasks() {
    // Get tasks and task actions from TaskContext
    return useTaskContext();
}
