import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/Users.jsx";
import Todo from "./components/Todo/Todo.jsx";
import ErrorPage from "./components/Layout/ErrorPage.jsx";
import BooksPage from "./pages/Books.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Todo />,
            },
            {
                path: "/users",
                element: <UsersPage />,
            },
            {
                path: "/books",
                element: <BooksPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
