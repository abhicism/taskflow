import { useState } from "react";
import { useTasks } from "../context/useTasks";

// Component for adding a new task
function TaskForm() {
    //stores the text entered by the user.
    const [title, setTitle] = useState("");
    //get the task actions from our custom hook useTasks, which provides access to the dispatch function for managing tasks.
    const { addTask } = useTasks();

    // Function to handle form submission
    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault(); // Prevents the default form submission behavior, which would cause a page reload.
   // Trim the title to remove any leading or trailing whitespace
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }
  //add  the new task to the task list by dispatching an action with the type "add" and the trimmed title as payload.
        addTask(trimmedTitle);
     //clear the input after adding the task
        setTitle("");
    }

    return (
    //calls handlesubmit when the user submits the form
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task..."
                value={title}
                onChange={(event) =>
                    setTitle(event.target.value)
                }
            />
            {/* Submits the form to add the task */}
            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
