<<<<<<< HEAD
export const SIDEBAR_PAGES = [{title: 'Inicio', link: '', icon: ''}, {title: 'Editor', link: 'editor', icon: ''}]

export const THEME_COLORS = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const DIRECTORY_TYPE = 0
export const ARCHIVE_TYPE = 1
=======
import React from "react";
import { ReactComponent as InicioIcon } from "../assets/multiple-users-silhouette.svg";
import { ReactComponent as EditorIcon } from "../assets/open-book.svg";

export const SIDEBAR_PAGES = [
  { title: "Inicio", link: "", icon: <InicioIcon /> },
  { title: "Editor", link: "editor", icon: <EditorIcon /> },
  { title: "Disciplinas", link: "subjects", icon: "" },
];

export const THEME_COLORS = {
  LIGHT: "light",
  DARK: "dark"
};
>>>>>>> 4204c24df15ab386ca502e637e57cffa31a3d58d
