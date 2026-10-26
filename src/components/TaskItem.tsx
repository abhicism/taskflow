import type { Task } from "../types/Task";
import { useTasks } from "../context/useTasks";

// Defines the props this component receives
interface TaskItemProps {
  task: Task;
}

// Displays one task with complete and delete actions
function TaskItem({ task }: TaskItemProps) {
  // Gets task actions from our custom hook
  const { toggleTask, deleteTask } = useTasks();

  return (
    // Displays one task inside a list item
    <li>
      {/* Checkbox to mark the task as completed */}
      <input
        type="checkbox"
        checked={task.completed}
        // Toggles the task's completion status
        onChange={() => toggleTask(task.id)}
      />

      {/* Shows the task title */}
      <span
        // Adds a line through the title if completed
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </span>

      {/* Deletes this task when clicked */}
      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

// Makes this component available to other files
export default TaskItem;
