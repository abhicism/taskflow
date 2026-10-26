import { useState } from "react";
import { useTasks } from "./useTasks";

type Filter = "all" | "active" | "completed";

function TaskList() {
    const { tasks, toggleTask, deleteTask } = useTasks();

    const [filter, setFilter] = useState<Filter>("all");

    // Calculate statistics from the existing tasks
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const activeTasks = totalTasks - completedTasks;

    // Select which tasks to display
    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") {
            return !task.completed;
        }

        if (filter === "completed") {
            return task.completed;
        }

        return true;
    });

   return (
    <section>
        <h2>My Tasks</h2>

        <div className="stats">
            <div className="stat-card">
                <h3>Total Tasks</h3>
                <p>{totalTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Active Tasks</h3>
                <p>{activeTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Completed Tasks</h3>
                <p>{completedTasks}</p>
            </div>
        </div>

        <div>
            <button onClick={() => setFilter("all")}>
                All
            </button>{" "}

            <button onClick={() => setFilter("active")}>
                Active
            </button>{" "}

            <button onClick={() => setFilter("completed")}>
                Completed
            </button>
        </div>

        {filteredTasks.length === 0 && (
            <p>No tasks in this filter.</p>
        )}

        {filteredTasks.map((task) => (
            <div className="task-row" key={task.id}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                        toggleTask(task.id)
                    }
                />

                <span
                    className={
                        task.completed
                            ? "task-title completed"
                            : "task-title"
                    }
                >
                    {task.title}
                </span>

                <button
                    onClick={() =>
                        deleteTask(task.id)
                    }
                >
                    Delete
                </button>
            </div>
        ))}
    </section>
);
}

export default TaskList;
