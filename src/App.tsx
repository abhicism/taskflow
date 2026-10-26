import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <TaskProvider>
            <main>
                <h1>TaskFlow</h1>

                <TaskForm />
                <TaskList />
            </main>
        </TaskProvider>
    );
}

export default App;