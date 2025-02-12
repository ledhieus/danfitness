import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import RootLayout from "./page/RootLayout";
import WorkoutPlanPage from "./page/WorkoutPlanPage";
import ExercisePage from "./page/ExercisePage";
import EscerciseTargetPage from "./page/EscerciseTargetPage";
import ModelProvider from "./context/ModelProvider";
import CreateExcerciseAuth from "./page/auth/CreateExcerciseAuth";
import WorkoutForm from "./page/auth/WorkoutForm";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "lich-tap/:slugPlan",
        element: <WorkoutPlanPage />,
      },
      {
        path: "bai-tap",
        element: <ExercisePage />,
      },
      {
        path: "bai-tap/:slugExercise",
        element: <EscerciseTargetPage />,
      },
    ],
  },
  {
    path: "auth/createExercise",
    element: <CreateExcerciseAuth/>
  },
  {
    path: "auth/createPlanWokout",
    element: <WorkoutForm/>
  }
]);
createRoot(document.getElementById("root")).render(
  <ModelProvider>
    <RouterProvider router={router} />
  </ModelProvider>
);
