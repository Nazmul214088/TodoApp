import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import TaskContextProvider from "./Contexts/TaskProvider";
import ThemeProvider from "./Contexts/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
