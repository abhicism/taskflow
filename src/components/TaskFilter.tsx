type Filter = "all" | "active" | "completed";

type TaskFilterProps = {
    filter: Filter;
    onChange: (filter: Filter) => void;
};

function TaskFilter({ filter, onChange }: TaskFilterProps) {
    return (
        <div className="filters" aria-label="Filter tasks">
            {(["all", "active", "completed"] as const).map((option) => (
                <button
                    key={option}
                    type="button"
                    aria-pressed={filter === option}
                    onClick={() => onChange(option)}
                >
                    {option[0].toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default TaskFilter;
