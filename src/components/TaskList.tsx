import { useState } from "react";
import { useTasks } from "../context/useTasks";
import TaskFilter from "./TaskFilter";
import TaskItem from "./TaskItem";
import TaskStats from "./TaskStats";

type Filter = "all" | "active" | "completed";

function TaskList() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState<Filter>("all");
    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <section aria-labelledby="tasks-heading">
            <h2 id="tasks-heading">My Tasks</h2>
            <TaskStats />
            <TaskFilter filter={filter} onChange={setFilter} />
            {filteredTasks.length === 0 ? (
                <p className="empty-state">
                    {tasks.length === 0
                        ? "No tasks yet. Add one above to get started."
                        : "No tasks in this filter."}
                </p>
            ) : (
                <ul>
                    {filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default TaskList;
