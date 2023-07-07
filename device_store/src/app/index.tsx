import { RouterProvider } from "react-router";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import ReactDOM from "react-dom/client";
import { CataloguePage } from "../pages/CataloguePage/CataloguePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,  
  },
  {
    path: "/catalogue",
    element: <CataloguePage/>,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "product/:productId",
  //   element: <ProductPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);