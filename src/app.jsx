import React, { useEffect, useState } from "react";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Pages from "./Components/Compositions/Pages/index";
import * as Features from "./Components/Features";
import { SettingsMenu, Contact, Socials } from "./Components/Compositions";
import * as Sections from "./Components/Compositions/Sections";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/Github-Page/",
      element: <Pages.Home />,
    },
    {
      path: "/Github-Page/GloriaArmada",
      element: <Pages.GloriaArmada />,
    },
    {
      path: "/Github-Page/Interactives",
      element: <Pages.Interactives />,
    },
    {
      path: "/Github-Page/GameEngine",
      element: <Pages.GameEngine />,
    },
    {
      path: "/Github-Page/CaveGen",
      element: <Pages.CaveGen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
