import { changeThemeColors } from "./utilities/themeColors.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import DetailPage, { loader as countryLoader } from "./routes/countries.jsx";

import { createRoot } from "react-dom/client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "countries/:identifier",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
    loader: countryLoader,
  },
]);

const savedTheme = localStorage.getItem("theme") || "dark";
changeThemeColors(savedTheme);

createRoot(document.querySelector("#app-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
