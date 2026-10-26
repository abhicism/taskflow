// Import the custom hook to access tasks
import { useTasks } from "../context/useTasks";

function TaskStats() {
    // Get the tasks array
    const { tasks } = useTasks();

    // Count completed tasks
    const completed = tasks.filter(
        (task) => task.completed
    ).length;

    // Count all incomplete tasks
    const remaining = tasks.filter(
        (task) => !task.completed
    ).length;

    return (
        <div>
            {/* Display the total number of tasks */}
            <p>Total tasks: {tasks.length}</p>

            {/* Display completed task count */}
            <p>Completed: {completed}</p>

            {/* Display remaining task count */}
            <p>Remaining: {remaining}</p>
        </div>
    );
}

export default TaskStats;
