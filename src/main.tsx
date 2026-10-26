// Import StrictMode to help detect potential React problems
import { StrictMode } from "react";

// Import createRoot to render React into the HTML page
import { createRoot } from "react-dom/client";

// Import global CSS styles
import "./index.css";

// Import the main application component
import App from "./App";

// Import the provider that shares task state

// Find the root element in index.html and render the app
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* Display the main application */}
        <App />
    </StrictMode>
);

//Remember: main.tsx starts your React app, loads global CSS, 
// and wraps App with TaskProvider,
// so components can access shared task data.
