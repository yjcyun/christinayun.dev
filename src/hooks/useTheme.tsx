import { useEffect, useState } from "react";

export type themeMode = "dark" | "light";

export type useThemeReturnType = {
  theme: themeMode;
  themeToggler: () => void;
};

const useTheme = (): useThemeReturnType => {
  const isBrowser = () => typeof window !== "undefined";
  const prefersDark =
    isBrowser() && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const preference = prefersDark ? "dark" : "light";

  const [theme, setTheme] = useState<themeMode>(preference);

  const setMode = (mode: themeMode) => {
    isBrowser() && localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme =
      isBrowser() && (localStorage.getItem("theme") as themeMode);

    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeToggler };
};

export default useTheme;
