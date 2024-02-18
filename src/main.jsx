import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";
import {
  ContactLoader,
  IndivitualContactLoader,
} from "./components/ContactLoader";
import {
  contactAction,
  contactUpdateAction,
  DeleteContactAction,
} from "./actions/contactAction";
import EditContact from "./routes/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: ContactLoader,
    action: contactAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: IndivitualContactLoader,
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: IndivitualContactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        action: contactUpdateAction,
        loader: IndivitualContactLoader,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: DeleteContactAction,
        errorElement: <div>Oops! Something went wrong</div>,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About Us</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
