import React from "react";
import { ReactComponent as Editor } from "../assets/contract.svg";
import { ReactComponent as Subjects } from "../assets/open-book.svg";
import { ReactComponent as Library } from "../assets/book.svg";
import { ReactComponent as Tools } from "../assets/tools.svg";
import { ReactComponent as Feedback } from "../assets/love.svg";
import { ReactComponent as HiveCentral } from "../assets/file.svg";
import { ReactComponent as HiveShare } from "../assets/hiveshare.svg";

export const SIDEBAR_PAGES = [
  { title: "Editor", link: "editor", icon: <Editor /> },
  { title: "Disciplinas", link: "subjects", icon: <Subjects /> },
  { title: "Biblioteca", link: "library", icon: <Library /> },
  { title: "Ferramentas", link: "tools", icon: <Tools /> },
  { title: "Feedback", link: "feedback", icon: <Feedback /> },
  { title: "HiveCentral", link: "hivecentral", icon: <HiveCentral /> },
  { title: "HiveShare", link: "hiveshare", icon: <HiveShare /> }
];

export const THEME_COLORS = {
  LIGHT: "light",
  DARK: "dark"
};

export const DIRECTORY_TYPE = 0;
export const ARCHIVE_TYPE = 1;
