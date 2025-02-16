import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./page/HomePage";
import RootLayout from "./page/RootLayout";
// import WorkoutPlanPage from "./page/WorkoutPlanPage";
// import ExercisePage from "./page/ExercisePage";
// import EscerciseTargetPage from "./page/EscerciseTargetPage";
import ModelProvider from "./context/ModelProvider";
import CreateExcerciseAuth from "./page/auth/CreateExcerciseAuth";
import WorkoutForm from "./page/auth/WorkoutForm";
import { lazy } from "react";
import ProductProvider from "./context/ProductProvider";
// import SingleWorkout from "./page/SingleWorkout";
// import DetailSingleWorkout from "./page/DetailSingleWorkout";

const HomePage = lazy(() => import("./page/HomePage"));
const WorkoutPlanPage = lazy(() => import("./page/WorkoutPlanPage"));
const ExercisePage = lazy(() => import("./page/ExercisePage"));
const EscerciseTargetPage = lazy(() => import("./page/EscerciseTargetPage"));
const SingleWorkout = lazy(() => import("./page/SingleWorkout"));
const DetailSingleWorkout = lazy(() => import("./page/DetailSingleWorkout"));
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
      {
        path: "buoi-tap",
        element: <SingleWorkout />,
      },
      {
        path: "buoi-tap/:slugDetail",
        element: <DetailSingleWorkout />,
      },
    ],
  },
  {
    path: "auth/createExercise",
    element: <CreateExcerciseAuth />,
  },
  {
    path: "auth/createPlanWokout",
    element: <WorkoutForm />,
  },
]);
createRoot(document.getElementById("root")).render(
  <ModelProvider>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </ModelProvider>
);
